import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">旅游攻略网站</h2>
            <p className="text-gray-300 text-sm mt-2">发现世界的美好，记录旅行的精彩</p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">导航</h3>
              <div className="mt-2 space-y-1">
                <Link href="/" className="text-gray-300 hover:text-white block text-sm">
                  首页
                </Link>
                <Link href="/destinations" className="text-gray-300 hover:text-white block text-sm">
                  目的地
                </Link>
                <Link href="/travel-tips" className="text-gray-300 hover:text-white block text-sm">
                  旅行贴士
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-white block text-sm">
                  关于我们
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">热门目的地</h3>
              <div className="mt-2 space-y-1">
                <Link href="/destinations/beijing" className="text-gray-300 hover:text-white block text-sm">
                  北京
                </Link>
                <Link href="/destinations/shanghai" className="text-gray-300 hover:text-white block text-sm">
                  上海
                </Link>
                <Link href="/destinations/lijiang" className="text-gray-300 hover:text-white block text-sm">
                  丽江
                </Link>
                <Link href="/destinations/chengdu" className="text-gray-300 hover:text-white block text-sm">
                  成都
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">联系我们</h3>
              <div className="mt-2 space-y-1">
                <p className="text-gray-300 text-sm">邮箱: info@travelguide.com</p>
                <p className="text-gray-300 text-sm">电话: +86 123 4567 8901</p>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-gray-300 hover:text-white">
                    <span className="sr-only">微信</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      {/* WeChat icon */}
                      <path d="M8.69,11.5c-0.31,0-0.56-0.25-0.56-0.56s0.25-0.56,0.56-0.56s0.56,0.25,0.56,0.56S9,11.5,8.69,11.5z M12.69,11.5c-0.31,0-0.56-0.25-0.56-0.56s0.25-0.56,0.56-0.56s0.56,0.25,0.56,0.56S13,11.5,12.69,11.5z M15.19,14.5c-0.31,0-0.56-0.25-0.56-0.56s0.25-0.56,0.56-0.56s0.56,0.25,0.56,0.56S15.5,14.5,15.19,14.5z M19.56,17c0,0.79-0.64,1.44-1.44,1.44H5.88c-0.79,0-1.44-0.64-1.44-1.44V7c0-0.79,0.64-1.44,1.44-1.44h12.25c0.79,0,1.44,0.64,1.44,1.44V17z M11,10.38c-1.58,0-2.88,1.05-2.88,2.37c0,1.29,1.29,2.37,2.88,2.37c0.33,0,0.67-0.05,0.97-0.15c0.03-0.01,0.06-0.01,0.09-0.01c0.1,0,0.19,0.05,0.24,0.14l0.65,0.77c0.01,0.02,0.03,0.03,0.05,0.03h0.03c0.06-0.01,0.11-0.06,0.11-0.12l-0.15-0.88c-0.01-0.06,0.02-0.13,0.07-0.16c0.67-0.35,1.07-0.94,1.07-1.58C14.13,11.43,12.74,10.38,11,10.38z M17.31,14.13c0-1.06-1.07-1.94-2.37-1.94s-2.37,0.87-2.37,1.94c0,1.06,1.07,1.94,2.37,1.94c0.27,0,0.55-0.04,0.8-0.12c0.03-0.01,0.05-0.01,0.07-0.01c0.08,0,0.16,0.04,0.2,0.11l0.53,0.63c0.01,0.01,0.03,0.02,0.04,0.02h0.03c0.05-0.01,0.09-0.05,0.09-0.1l-0.12-0.72c-0.01-0.05,0.02-0.11,0.06-0.13C17,14.73,17.31,14.26,17.31,14.13z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    <span className="sr-only">微博</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      {/* Weibo icon */}
                      <path d="M10.098 20c-4.5 0-8.098-2.105-8.098-5.398 0-1.5.76-3.248 2.01-4.873.765-.975 1.626-1.845 2.576-2.625.29-.226.55-.302.8-.226.362.075.513.377.437.677-.113.452-.188.979-.188 1.5 0 .278.075.454.226.53.15.076.34.076.514-.076 1.36-1.132 2.76-1.885 4.147-2.262.678-.15 1.43-.226 2.16-.151.363.076.514.377.438.677-.076.302-.4.528-.766.604-.967.226-1.933.603-2.85 1.131-.38.226-.645.452-.797.754-.15.226-.188.528-.151.829.113.603.4.98.967 1.13.69.227 1.444.227 2.16.077 2.044-.377 3.814-1.432 5.191-3.093 1.146-1.357 1.52-2.714 1.107-4.045-.113-.303-.01-.529.289-.604.302-.76.604.075.717.378.588 1.959-.304 3.996-2.538 5.954-2.085 1.81-4.624 2.865-7.438 3.092-.514.076-1.069.076-1.544.076zM9.473 9.121c-1.675 1.58-2.578 3.318-2.578 5.127 0 2.035 2.351 3.713 5.342 3.79 2.99-.077 5.342-1.755 5.342-3.79 0-2.075-2.352-3.728-5.342-3.728-.604 0-1.195.075-1.76.15-.604.152-1.004.302-1.004.452zm7.515-3.015c.113.075.151.15.151.302v.83c0 .151-.151.302-.363.302h-.74c-.212 0-.362-.15-.362-.302v-.83c0-.15.15-.302.362-.302h.952zm-1.874-.83c.704 0 1.294.15 1.785.452.49.303.776.756.851 1.282.076.528 0 1.056-.226 1.508-.226.452-.615.83-1.144 1.056-.113.076-.262.076-.362 0-.113-.075-.151-.226-.113-.377.151-.302.264-.603.34-.905.073-.302 0-.603-.228-.83-.226-.226-.514-.301-.89-.301h-.477c-.226 0-.363-.151-.363-.302 0-.152.137-.303.362-.303h.477v-.28zm-2.802.15c1.22 0 2.275.226 3.118.678.842.452 1.334 1.13 1.334 1.884 0 .753-.492 1.432-1.334 1.884-.843.452-1.899.677-3.118.677-1.22 0-2.275-.225-3.117-.677-.844-.452-1.335-1.13-1.335-1.884 0-.754.491-1.432 1.335-1.884.842-.452 1.898-.678 3.117-.678zm0 3.694c.854 0 1.546-.302 1.546-.679 0-.377-.692-.678-1.546-.678-.855 0-1.547.301-1.547.678 0 .377.692.679 1.547.679z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-center text-sm">
            &copy; {currentYear} 旅游攻略网站. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  );
} 