import { mountQuasar } from '@quasar/quasar-app-extension-testing-unit-jest';
import { QHeader, QBtn, QToolbar, QToolbarTitle, QBtnDropdown, QLayout, QTooltip,
       QItem, QItemSection, QDrawer, QIcon, QSeparator, QPageContainer, QCardActions,
       QInput, QForm, QCardSection, QCard, QPage } from 'quasar';
import Login from '../src/layouts/Login';

describe('Layout-Login', () => {
    test('initial login layout', () => {
        const wrapper = mountQuasar(Login, {
            quasar: {
                components: {
                    QHeader,
                    QBtn,
                    QToolbar,
                    QToolbarTitle,
                    QBtnDropdown,
                    QLayout,
                    QTooltip,
                    QItem,
                    QItemSection,
                    QDrawer,
                    QIcon,
                    QSeparator,
                    QPageContainer,
                    QCardActions,
                    QInput,
                    QForm,
                    QCardSection,
                    QCard,
                    QPage
                },
            },
            propsData: {},
        });
        expect(wrapper).toBeTruthy();
    });
});
