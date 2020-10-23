# Kara-Charity

This module provides the Charity data for each bundleId. It uses a mocked set of 100 unique charities mapped in sets of 1-3 across 100 unique bundleIds; currently, it pulls no data from any external source.

TBD:
I need to whiteboard my React a bit further to get my intended data flow happening.
My tests became very cumbersome using Mocha/Chai so I want to refactor to Jest asap.
Reviewing proxy server integration.

## Seed script:
## mysql -u root < schema.sql

Internal routes (serving this module):
- GET to (route) in Tier Service for bundleIDs (official seeding only)
- GET to ‘/charity/:bundleId/images’ - serves a row of all a bundleId's charity images, clickable for a modal
- GET to '/charity/:charityId' - info for the modal, using charity[x] .name .image .video .description

External routes (serving other modules):
- GET to ‘/charity/:bundleId/images’ - serves a row of all a bundleId's charity images (bundleNav mouseover)
- GET to ‘/charity/:bundleId/names’ - serves the name of each charity in a bundleId (order summary, descriptions)