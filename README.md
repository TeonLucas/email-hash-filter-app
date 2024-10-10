# email-hash-filter-app

This is a custom visualization that converts an email to a hash.

1. Specify an attribute name you want to filter when you configure this viz on a dashboard.
2. It then shows an input field for the email.
3. When you click the filter button, it creates a hash of the email, and sets the dashboard filters with this value.

## Development

Run the following scripts:

```
npm install
npm start
```

Visit https://one.newrelic.com/?nerdpacks=local and :sparkles:

## Install

First set the right profile for the account you want to publish to.
```
nr1 profiles:default
```

Then update the nerdpack uuid to that account.
```
nr1 nerdpack:uuid -gf
```

Publish and subscribe
```
nr1 nerdpack:publish
nr1 nerdpack:subscribe
```
