export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5ed77094fb011f5d267a7259',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-mdjx5thu',
                  apiId: '970c7cf1-1bfd-4e18-b593-fb6930a8772a'
                },
                {
                  buildHookId: '5ed77094752e49e37da43069',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-nrwydca4',
                  apiId: 'e884c14e-a335-4f51-8c8e-abb30b3ed55c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gillistephan/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-nrwydca4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
