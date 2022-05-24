// assets
import { IconDashboard, IconAmbulance } from '@tabler/icons';

const application = {
    id: 'application',
    title: 'Сервисы',
    type: 'group',
    children: [
        {
            id: 'dispatchers',
            title: 'Диспетчеры',
            type: 'collapse',
            icon: IconDashboard,
            children: [
                {
                    id: 'dispatchers-list',
                    title: 'Все профили',
                    type: 'item',
                    url: '/dispatchers/all',
                    breadcrumbs: false
                },
                {
                    id: 'dispatchers-add',
                    title: 'Добавить диспетчера',
                    type: 'item',
                    url: '/dispatchers/add',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'vehicles',
            title: 'Автомобили',
            type: 'collapse',
            icon: IconAmbulance,
            children: [
                {
                    id: 'vehicles-list',
                    title: 'Все транспортные средства',
                    type: 'item',
                    url: '/vehicles/all',
                    breadcrumbs: false
                },
                {
                    id: 'vehicles-add',
                    title: 'Добавить транспорт',
                    type: 'item',
                    url: '/vehicles/add',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default application;
