import { mountQuasar } from '@quasar/quasar-app-extension-testing-unit-jest';
import { QBtn } from 'quasar';
import Error from '../src/pages/Error404';

describe('Error', () => {
    test('initial error page', () => {
        const wrapper = mountQuasar(Error, {
            quasar: {
                components: {
                    QBtn,
                },
            },
            propsData: {},
        });
        expect(wrapper).toBeTruthy();
    });
});