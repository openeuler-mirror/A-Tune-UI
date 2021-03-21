import { mountQuasar } from '@quasar/quasar-app-extension-testing-unit-jest';
import { QPage } from 'quasar';
import Index from '../src/pages/Index';

describe('Index', () => {
    test('initial Index page', () => {
        const wrapper = mountQuasar(Index, {
            quasar: {
                components: {
                    QPage,
                },
            },
            propsData: {},
        });
        expect(wrapper).toBeTruthy();
    });
});
