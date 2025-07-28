type MaterialIconName =
    | "arrow-downward"
    | "send"
    | "arrow-upward"
    | "shopping-cart";


export const actions: { label: string; icon: MaterialIconName, key: string }[] = [
    { label: 'Transfer', icon: 'send', key: 'transfer' },
    { label: 'Withdraw', icon: 'arrow-downward', key: 'withdraw' },
    { label: 'Deposit', icon: 'arrow-upward', key: 'deposit' },
    { label: 'Pay & Buy', icon: 'shopping-cart', key: 'pay_and_buy' },
];

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
