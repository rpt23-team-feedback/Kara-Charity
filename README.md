# Kara-Charity

This module provides the Charity data for each bundleId. Its final version will use a mocked set of 100 unique charities mapped in sets of 2-3 across 100 unique bundleIds; currently, its schema implements a minimum of mock data to verify API calls, and pulls no data from any external source.

Seed script:
mysql -u root < schema.sql

A successful route call can currently be evidenced via receiving schema-formatted data from a GET request to any '/charity/:charityId' between 1-100

Internal routes (serving this module):
  GET to (route) in Tier Service for bundleIDs (official seeding only)
  GET to ‘/charity/:bundleId/images’ - serves a row of all a bundleId's charity images, clickable for a modal
  GET to '/charity/:charityId' - info for the modal, using Charities[x].name .image .video .description

External routes (serving other modules):
  GET to ‘/charity/:bundleId/images’ - serves a row of all a bundleId's charity images (bundleNav mouseover)
  GET to ‘/charity/:bundleId/names’ - serves the name of each charity in a bundleId (order summary, descriptions)

(Table) bundles = {
  {
    bundleId:
    charity1: [(foreign key to Charities.name WHERE Charities.charityId = ?... or something like that) not null,
    charity2:  // matching keys etc.
    charity3: // (eventually mock this up using math random x the number of charities)
  },
  {...}
}

(Table) charities = {
  {
   charityId: number (incrementing), not null
   name: string, size, not null         // mocked up
   image: string, not null	           // links to an S3 url
   video: buffer		                  // stored as a file in S3
   description: string               // html formatted with links, paragraphs, italics etc.
  },
  {...}
}