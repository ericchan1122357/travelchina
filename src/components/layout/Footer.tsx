import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation('common');

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { href: '/about', label: t('nav.about') },
    { href: '/destinations', label: t('nav.destinations') },
    { href: '/guides', label: t('nav.guides') },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 关于我们 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.about')}</h3>
            <p className="text-gray-400">
              {t('footer.description')}
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contact@example.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Travel Street, City, Country</li>
            </ul>
          </div>

          {/* 社交媒体 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.social')}</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 