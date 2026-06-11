import { useTranslation } from 'react-i18next';

const SiteFooter = () => {
  const [t] = useTranslation();
  const recordInfo =
    import.meta.env.VITE_SITE_FOOTER_TEXT ||
    '备案/许可证号： 沪ICP备17026459号 公安备案号：31011002003378 强力支持 www.xuxiaoye.com';

  return (
    <footer className="site-footer" aria-label={t('siteFooterLabel')}>
      <span className="site-footer-record">{recordInfo}</span>
    </footer>
  );
};

export default SiteFooter;


