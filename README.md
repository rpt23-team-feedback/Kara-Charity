# Kara-Charity

This module provides the Charity data for each bundleId. Its final version will use a mocked set of 100 unique charities mapped in sets of 2-3 across 100 unique bundleIds; currently, its schema implements a minimum of mock data to verify API calls, and pulls no data from any external source.

## Seed script:
## mysql -u root < schema.sql

A successful API call can currently be evidenced in a GET request to /charity/all or /bundles/all
More routes coming soon&trade!

Internal routes (serving this module):
- GET to (route) in Tier Service for bundleIDs (official seeding only)
- GET to ‘/charity/:bundleId/images’ - serves a row of all a bundleId's charity images, clickable for a modal
- GET to '/charity/:charityId' - info for the modal, using charity[x] .name .image .video .description

External routes (serving other modules):
- GET to ‘/charity/:bundleId/images’ - serves a row of all a bundleId's charity images (bundleNav mouseover)
- GET to ‘/charity/:bundleId/names’ - serves the name of each charity in a bundleId (order summary, descriptions)