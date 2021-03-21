import { mountQuasar } from '@quasar/quasar-app-extension-testing-unit-jest';
import { QLayout, QHeader, QToolbar, QBtn, QToolbarTitle, QInput, QIcon, QBtnDropdown,
       QList, QItem, QItemSection, QItemLabel, QDrawer, QScrollArea, QSeparator,
       QPageContainer, QTooltip } from 'quasar';
import { VRipple } from '@vue/test-utils';
import Layout from '../src/layouts/Layout';

describe('Layout', () => {
    test('initial layout', () => {
        const wrapper = mountQuasar(Layout, {
            quasar: {
                components: {
                    QLayout,
                    QHeader,
                    QToolbar,
                    QBtn,
                    QToolbarTitle,
                    QInput,
                    QIcon,
                    QBtnDropdown,
                    QList,
                    QItem,
                    QItemSection,
                    QItemLabel,
                    QDrawer,
                    QScrollArea,
                    QSeparator,
                    QPageContainer,
                    QTooltip,
                },
            },
            propsData: {},
        });
        expect(wrapper).toBeTruthy();
    });
});
