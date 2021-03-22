import { mountQuasar } from '@quasar/quasar-app-extension-testing-unit-jest';
import { QPage, QCard, QTabPanel, QBtn, QForm, QInput } from 'quasar';
import Analysis from '../src/pages/Analysis';

describe('Analysis', () => {
    test('initial analysis page', () => {
        window.localStorage.setItem('userId', 1);
        const wrapper = mountQuasar(Analysis, {
            quasar: {
                components: {
                    QPage,
                    QCard,
                    QTabPanel,
                    QBtn,
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