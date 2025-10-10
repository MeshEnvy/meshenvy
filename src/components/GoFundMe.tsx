import { useEffect, useRef } from 'react'

interface GoFundMeProps {
  slug: string
  size?: 'small' | 'medium' | 'large'
  partner?: string
  attributionId?: string
}

export default function GoFundMe({ slug, size = 'large', partner, attributionId }: GoFundMeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  useEffect(() => {
    function createIFrame() {
      if (!containerRef.current) return

      const utmContent = window?.location?.hostname || 'none'
      
      // Build the URL with size in the path
      const baseUrl = `https://www.gofundme.com/f/${slug}/widget/${size}`
      const parsedUrl = new URL(baseUrl)
      
      // Add optional parameters
      if (attributionId) {
        parsedUrl.searchParams.set('attribution_id', attributionId)
      }

      // Set UTM parameters
      parsedUrl.searchParams.set('utm_content', utmContent)

      if (partner) {
        parsedUrl.searchParams.set('utm_medium', 'partner')
        parsedUrl.searchParams.set('utm_source', partner)
      } else {
        parsedUrl.searchParams.set('utm_medium', 'referral')
        parsedUrl.searchParams.set('utm_source', 'widget')
      }

      // Create iframe with TCM parameters
      const iframeSrc = `${parsedUrl}#:~:tcm-regime=GDPR&tcm-prompt=Hidden`
      const iframe = document.createElement('iframe')

      // Set height based on size
      const heightMap = {
        small: '70',
        medium: '200',
        large: '500',
      }

      iframe.setAttribute('height', heightMap[size])
      iframe.setAttribute('class', 'gfm-embed-iframe')
    //   iframe.setAttribute('width', '100%')
      iframe.setAttribute('frameborder', '0')
      iframe.setAttribute('scrolling', 'no')
      iframe.setAttribute('allowtransparency', 'true')
      iframe.setAttribute('src', iframeSrc)
      iframe.style.background = 'transparent'

      // Clear container and add iframe
      containerRef.current.innerHTML = ''
      containerRef.current.appendChild(iframe)
      iframeRef.current = iframe
    }

    function handleMessage(event: MessageEvent) {
      if (event.data && event.data.type === 'gfm-embed-widget-resize' && event.data.offsetHeight !== undefined) {
        if (iframeRef.current && iframeRef.current.contentWindow === event.source) {
          iframeRef.current.height = event.data.offsetHeight
        }
      }
    }

    createIFrame()
    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [slug, size, partner, attributionId])

  return <div ref={containerRef} className="gfm-embed" />
}

