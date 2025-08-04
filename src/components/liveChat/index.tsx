// components/LiveChat.tsx
import Script from "next/script";

export default function LiveChat() {
  return (
    <>
      <div suppressHydrationWarning>
        <call-us-selector
          phonesystem-url="https://1206.3cx.cloud"
          party="LiveChat113082"
        ></call-us-selector>
      </div>

      <Script
        id="tcx-callus-js"
        src="https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js"
        strategy="lazyOnload"
      />
    </>
  );
}
