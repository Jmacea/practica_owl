# -*- coding: utf-8 -*-
{
    'name': 'Rick_morty',
    'version': '16.0.1.0.0',
    'description': """ Rick_morty Description """,
    'summary': """ Rick_morty Summary """,
    'author': '',
    'website': '',
    'category': '',
    'depends': ['base', 'web'],
    "data": [
        "views/get_service_client_action.xml"
    ],
    'assets': {
            'web.assets_backend': [
                'rick_morty/static/src/**/*'
            ],
        },
    'application': True,
    'installable': True,
    'auto_install': False,
    'license': 'LGPL-3',
}
