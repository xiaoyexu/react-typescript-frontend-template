import { AxiosResponseHeaders } from 'axios';

const stripUUID = (uuid: string) => {
  return uuid.replaceAll('-', '');
};

enum UIDeviceType {
  PC,
  Mobile
}

const isMobileUi = window.screen.width <= 900 ? true : false;
const userDevice: UIDeviceType = isMobileUi
  ? UIDeviceType.Mobile
  : UIDeviceType.PC;

const mapLanguage = (lang: string) => {
  switch (lang) {
    case 'zh_HK':
      return 'Cantonese';
    case 'zh_CN':
      return 'Mandarin';
    default:
      return 'English';
  }
};

const random = function (n: number) {
  const str = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < n; i++) {
    result += str[parseInt(Math.random() * str.length + '')];
  }
  return result;
};

const formatDate = (date: any) =>
  [
    date.getFullYear(),
    (date.getMonth() + 1).toString().padStart(2, '0'),
    date.getDate().toString().padStart(2, '0')
  ].join('-');

type DownloadFile = { data: Blob; name: string };

const downloadFile = (file: DownloadFile) => {
  if (file) {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(new Blob([file.data]));
    link.setAttribute('download', file.name);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

const transformResponse = (data: Blob, headers: AxiosResponseHeaders) => {
  let name;
  const contentDisposition = headers['content-disposition'];
  if (contentDisposition) {
    const disposition = contentDisposition as string;
    let size = 10,
      to = 1,
      index = disposition.indexOf('filename="');
    if (index < 0) {
      ((size = 9), (to = 0), (index = disposition.indexOf('filename=')));
    }
    name = disposition.substring(index + size, disposition.length - to);
  } else {
    // default xlsx file
    const fileName = new Date().toString() + '.xlsx';
    name = fileName ?? new Date().getMilliseconds().toString();
  }

  return { data: data, name: name };
};

export {
  stripUUID,
  isMobileUi,
  userDevice,
  UIDeviceType,
  mapLanguage,
  random,
  formatDate,
  downloadFile,
  transformResponse
};

export type { DownloadFile };
