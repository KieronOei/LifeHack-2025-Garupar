function getCompanyName(url) {
  try {
    const domain = (new URL(url)).hostname.replace(/^www\./, '');
    const company = domain.split('.')[0];
    return company;
  } catch (e) {
    return null;
  }
}
