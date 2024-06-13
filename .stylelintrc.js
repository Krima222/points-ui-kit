const sortOrderSmacss = require('stylelint-config-property-sort-order-smacss/generate');

/** @type {import('stylelint').Config} */
module.exports = {
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-property-sort-order-smacss',
    ],
    plugins: ['stylelint-scss'],
    rules: {
        // Правила именования классов по умолчанию, пока просто сбросил
        'selector-class-pattern': '.+',

        // Максимальная вложенность
        'max-nesting-depth': 1,

        // Отступы между правилами, правило это .class {}
        'rule-empty-line-before': [
            'always',
            {
                ignore: ['first-nested'], // убрал у первого вложенного
            },
        ],

        // Отступы между свойствами и комментами
        'declaration-empty-line-before': [
            'never',
            {
                ignore: [
                    'after-declaration', // разрешаю между свойствами, чтобы работал плагин, иных вариантов не нашёл 😕
                ],
            },
        ],

        // Настройка плагина, который устанавливает порядок, задал, обязательные отступы между логическими блоками
        'order/properties-order': [
            sortOrderSmacss({ emptyLineBefore: 'always' }),
        ],

        // Типо autoprefixer сам всё фиксит, нихуя он не фиксит
        'property-no-vendor-prefix': [
            true,
            {
                ignoreProperties: ['background-clip'],
            },
        ],

        // Использовать только старый синтаксис медиавыражений (новый не работает в safari)
        'media-feature-range-notation': 'prefix',
    },
};
