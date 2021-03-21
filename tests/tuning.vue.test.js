import { mountQuasar } from '@quasar/quasar-app-extension-testing-unit-jest';
import { QBtn, QPage, QCard, QTabs, QTab, QSeparator, QTabPanels, QTabPanel, QForm, QInput } from 'quasar';
import Tuning from '../src/pages/Tuning';

describe('Tuning', () => {
    test('initial tuning page', () => {
        window.localStorage.setItem('userId', 1);
        const wrapper = mountQuasar(Tuning, {
            quasar: {
                components: {
                    QBtn,
                    QPage,
                    QCard,
                    QTabs,
                    QTab,
                    QSeparator,
                    QTabPanels,
                    QTabPanel,
                    QForm,
                    QInput
                },
            },
            propsData: {

            },
        });
        expect(wrapper).toBeTruthy();
    });
});
