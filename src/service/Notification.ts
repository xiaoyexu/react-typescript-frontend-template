type NotificationType = 'success' | 'info' | 'warning' | 'error';

const openNotificationWithIcon = (
  api: any,
  type: NotificationType,
  title: string,
  msgObj?: any
) => {
  var description = '';
  if (msgObj == undefined) {
    description = '';
  } else if (typeof msgObj === 'string') {
    description = msgObj;
  } else if (msgObj.message) {
    description = msgObj.message;
  } else if (msgObj.response) {
    description = msgObj.response.data?.code?.description;
  }

  api[type]({
    message: title,
    description: description,
    duration: 1
  });
};

const success = (api: any, title: string, msgObj?: any) => {
  openNotificationWithIcon(api, 'success', title, msgObj);
};

const error = (api: any, title: string, msgObj?: any) => {
  openNotificationWithIcon(api, 'error', title, msgObj);
};

const info = (api: any, title: string, msgObj?: any) => {
  openNotificationWithIcon(api, 'info', title, msgObj);
};

const warning = (api: any, title: string, msgObj?: any) => {
  openNotificationWithIcon(api, 'warning', title, msgObj);
};

export default {
  success,
  error,
  info,
  warning
};
