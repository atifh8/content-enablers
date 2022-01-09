import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataProviderService {
  constructor() {}
  getApplicationData() {
    return appData;
  }
}
const appData = [
  {
    id: 0,
    name: 'Who',
    tabs: [
      {
        id: 1,
        name: 'Concepts',
        summary: 'The key learning areas in this section',
        list: [
          {
            id: 0,
            name: 'Screening',
            items: [
              {
                id: 0,
                title: 'Introduction to Screening',
              },
              {
                id: 1,
                title: 'UK Sanctions and Embargoes',
              },
              {
                id: 2,
                title: ' UK Restricted End Users',
              },
            ],
          },
          {
            id: 0,
            name: 'Exports',
            items: [
              {
                id: 0,
                title: 'Introduction to Exports',
              },
              {
                id: 1,
                title: 'Exporting Technical Information from the UK',
              },
              {
                id: 2,
                title: 'Exporting Technical Assistance from the UK',
              },
              {
                id: 3,
                title: 'Exporting Software',
              },
              {
                id: 4,
                title: 'Transshipment and Reexport',
              },
            ],
          },
          {
            id: 0,
            name: 'Brokering',
            items: [
              {
                id: 0,
                title: 'Introduction to Brokering',
              },
              {
                id: 1,
                title: 'UK Brokering Controls',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: 'Scenarios',
        summary: 'Potential situations that you might face.',
        list: [
          {
            id: 0,
            name: 'Scenarios Embded',
            items: [
              {
                id: 0,
                name: 'Screening',
                items: [
                  {
                    id: 0,
                    title: 'Scenarios US',
                  },
                  {
                    id: 1,
                    title: 'UK Scenarios',
                  },
                  {
                    id: 2,
                    title: ' India Scenarios',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        name: 'Resources',
        summary: 'All instructional information to download and use.',
        list: [
          {
            id: 0,
            name: 'Resources Embed',
            items: [
              {
                id: 0,
                title: 'Resources US',
              },
              {
                id: 1,
                title: 'UK Resources',
              },
              {
                id: 2,
                title: ' India Resources',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: 'What',
    tabs: [
      {
        id: 1,
        name: 'Concepts',
        summary: 'The key learning areas in this section',
        list: [
          {
            id: 0,
            name: 'Screening',
            items: [
              {
                id: 0,
                title: 'Introduction to Screening',
              },
              {
                id: 1,
                title: 'UK Sanctions and Embargoes',
              },
              {
                id: 2,
                title: ' UK Restricted End Users',
              },
            ],
          },
          {
            id: 0,
            name: 'Exports',
            items: [
              {
                id: 0,
                title: 'Introduction to Exports',
              },
              {
                id: 1,
                title: 'Exporting Technical Information from the UK',
              },
              {
                id: 2,
                title: 'Exporting Technical Assistance from the UK',
              },
              {
                id: 3,
                title: 'Exporting Software',
              },
              {
                id: 4,
                title: 'Transshipment and Reexport',
              },
            ],
          },
          {
            id: 0,
            name: 'Brokering',
            items: [
              {
                id: 0,
                title: 'Introduction to Brokering',
              },
              {
                id: 1,
                title: 'UK Brokering Controls',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: 'Scenarios',
        summary: 'Potential situations that you might face.',
        list: [
          {
            id: 0,
            name: 'Scenarios Embded',
            items: [
              {
                id: 0,
                name: 'Screening',
                items: [
                  {
                    id: 0,
                    title: 'Scenarios US',
                  },
                  {
                    id: 1,
                    title: 'UK Scenarios',
                  },
                  {
                    id: 2,
                    title: ' India Scenarios',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        name: 'Resources',
        summary: 'All instructional information to download and use.',
        list: [
          {
            id: 0,
            name: 'Resources Embed',
            items: [
              {
                id: 0,
                title: 'Resources US',
              },
              {
                id: 1,
                title: 'UK Resources',
              },
              {
                id: 2,
                title: ' India Resources',
              },
            ],
          },
        ],
      },
    ],
  },
];
