import { mountQuasar } from '@quasar/quasar-app-extension-testing-unit-jest';
import { QPage, QCard, QCardActions, QCardSection, QForm, QInput, QBtn } from 'quasar';
import Login from '../src/pages/Login';

describe('Login', () => {
    test('initial login page', () => {
        const wrapper = mountQuasar(Login, {
            quasar: {
                components: {
                    QPage,
                    QCard,
                    QCardActions,
                    QCardSection,
                    QForm,
                    QInput,
                    QBtn,
                },
            },
            propsData: {},
        });
        expect(wrapper).toBeTruthy();
    });
});
