# Kara-Charity
A module in FEC-Feedback's HumbleBundle

This module provides the Charity data for each bundleId. It uses a mocked set of 100 unique charities mapped in sets of 1-3 across 100 unique bundleIds.

## This service is designed to run alongside:

  [Bonuses](https://github.com/rpt23-team-feedback/kimarie-bonuses)
  [Descriptions](https://github.com/rpt23-team-feedback/max-descriptions)
  [Tiers](https://github.com/rpt23-team-feedback/Tier-Mark)
  [Items](https://github.com/rpt23-team-feedback/freddie-individual-item-details)

# Developer notes

  [API call notes](#API)
  [Scripts & Usage](#Scripts)
  [Developer Journal](#Notes)

## API

Internal routes (serving this module):
- GET to (route) in Tier Service for bundleIDs (official seeding only)
- GET to ‘/charity/:bundleId/images’ - serves a row of all a bundleId's charity images, clickable for a modal
- GET to '/charity/:charityId' - info for the modal, using charity[x] .name .image .video .description

External routes (serving other modules):
- GET to ‘/charity/:bundleId/images’ - serves a row of all a bundleId's charity images (bundleNav mouseover)
- GET to ‘/charity/:bundleId/names’ - serves the name of each charity in a bundleId (order summary, descriptions)

## Scripts
Run within the root directory.
'npm run start'
'npm run seed'
'npm run build'

Seed:
mysql -u root < schema.sql

Env:
npm install
npm install --save-dev webpack

## Notes
2021 - HumbleBundle has changed their page a bit! This implementation emulates the version used by their site c. Fall 2020, which had centrally-aligned charity images with no titles, rather than the website's current right-aligned display.
