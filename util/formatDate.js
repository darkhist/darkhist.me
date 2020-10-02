const formatDate = (str) => new Date(str).toLocaleDateString('en-US', { timeZone: 'UTC' });
export default formatDate;
