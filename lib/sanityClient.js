import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '31n8gtwr',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'sk9SfEUXHFVQshglsdfucGsLZesDUhTyfvASD2HO3astAToRL6gYfOBdhtLcPgJgwA3vRxmhAvUnWXV0Y487iBQpmSkHlG8QcZeF8KBcqVBHxr5ue9UGUTbfoxeeOLViM8srf1rNHwoVWS3WwOEyleCP5KBPgzg0CHpOvObHX8V3j5E6Bd2T',
  useCdn: false,
})
