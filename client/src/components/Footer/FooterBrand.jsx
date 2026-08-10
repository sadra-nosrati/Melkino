function FooterBrand() {
  return (
    <div className="flex flex-col items-center tablet-landscape:items-start text-center tablet-landscape:text-right">
      <h1 className="text-lg font-semibold tracking-wide text-theme-strong transition-colors duration-300 hover:text-dark-primary">
        Melkino
      </h1>

      <p className="mt-2 text-xs text-theme-subtle-low leading-relaxed">
        © {new Date().getFullYear()} تمامی حقوق برای Melkino محفوظ است
      </p>
    </div>
  );
}

export default FooterBrand;
