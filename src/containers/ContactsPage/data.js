export const contactsInfo = [
  {
    label: 'Address',
    fieldInfo: 'Some adress',
  },
  {
    label: 'Phone',
    fieldInfo: 'Some phone',
  },
  {
    label: 'Email',
    fieldInfo: 'Some email',
  },
  {
    label: 'Skype',
    fieldInfo: 'Some skype',
  },
];

export const formInfo = [
  {
    label: 'Message',
    id: 'formControlsTextarea',
    type: 'textarea',
    placeholder: 'Enter your message',
    componentClass: 'textarea',
    help: 'Too short message',
  },
  {
    label: 'Name',
    id: 'formControlsText',
    type: 'text',
    placeholder: 'Enter your name',
    componentClass: '',
    help: 'Only letters and numbers',
  },
  {
    label: 'Phone',
    id: 'formControlsPhone',
    type: 'tel',
    placeholder: 'Enter your phone',
    componentClass: '',
    help: 'phone format +XXX-XXX-XX-XX',
  },
  {
    label: 'Email',
    id: 'formControlsEmail',
    type: 'email',
    placeholder: 'Enter your email',
    componentClass: '',
    help: 'Email not valid',
  },
];

export const coordinates = {
  lat: 49.987,
  lng: 36.238,
  zoom: 13,
};
