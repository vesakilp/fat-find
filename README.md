# fat-traffic-lights

Web app to verify that if a certain food is good or bad for your cholesterol levels.
1. User can search foods with fuzzy search
2. Search hits are shown with traffic light color:
    * green: ok
    * yellow: ok in small portions
    * red: avoid

Milestone 1: Search capability and presenting results, data in a static list

Milestone 2: Data taken from fineli open api, algorithm based on the food characteristics to deduct the food group (green, yellow, red)

Milestone 3: Health check for fineli api, using cache if data not available / always using stored data and update it requently from fineli

Milestone 4: Dockerize and run from AWS
