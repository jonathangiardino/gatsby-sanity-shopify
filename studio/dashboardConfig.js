export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fa85808f2e549f883792aed',
                  title: 'Sanity Studio',
                  name: 'gatsby-sanity-shopify-studio',
                  apiId: 'f9285f00-4642-4134-9925-96c32f06d2fc'
                },
                {
                  buildHookId: '5fa858089b0d5709224efec7',
                  title: 'Blog Website',
                  name: 'gatsby-sanity-shopify',
                  apiId: '4842806d-5b12-4ae8-b0d0-867a40282003'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jonathangiardino/gatsby-sanity-shopify',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://gatsby-sanity-shopify.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
