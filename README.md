# `q-template-validator`
[![GitHub repo size](https://img.shields.io/github/repo-size/CriminalInjuriesCompensationAuthority/q-template-validator)](https://github.com/CriminalInjuriesCompensationAuthority/q-template-validator)
[![GitHub repo version](https://img.shields.io/github/package-json/v/CriminalInjuriesCompensationAuthority/q-template-validator)](https://github.com/CriminalInjuriesCompensationAuthority/q-template-validator/releases/latest)
[![GitHub repo npm version](https://img.shields.io/badge/npm_version->=8.5.2-blue)](https://github.com/CriminalInjuriesCompensationAuthority/q-template-validator/blob/master/package.json#L7)
[![GitHub repo node version](https://img.shields.io/badge/node_version->=16.0.0-blue)](https://github.com/CriminalInjuriesCompensationAuthority/q-template-validator/blob/master/package.json#L8)
[![GitHub repo contributors](https://img.shields.io/github/contributors/CriminalInjuriesCompensationAuthority/q-template-validator)](https://github.com/CriminalInjuriesCompensationAuthority/q-template-validator/graphs/contributors)
[![GitHub repo license](https://img.shields.io/github/package-json/license/CriminalInjuriesCompensationAuthority/q-template-validator)](https://github.com/CriminalInjuriesCompensationAuthority/q-template-validator/blob/master/LICENSE)


The `q-template-validator` module validates an application questionnaire JSON . `q-template-validator` is a dependency of the [Template Application](https://github.com/CriminalInjuriesCompensationAuthority/q-templates-application) module.

## Prerequisites
* Windows machine running docker desktop.
* You have Node Version Manager (NVM) installed globally. <sup>(_recommended, not required_)</sup>
* You have NPM `">=8.5.2"` installed globally.
* You have Node `">=16.0.0"` installed globally.
* You have the Postgres `create-tables.sql` file in a sibling directory named `postgres-scripts` (this mapping is defined in the `docker-compose.yml` file)

## Installing `q-template-validator`

Clone the `q-template-validator` repo, and `npm install`. This is not required to run the web app, this step would be carried out if you were doing development work and updating the validator.

## Using `q-template-validator`
`q-template-validator` is a dev dependency of the [Template Application](https://github.com/CriminalInjuriesCompensationAuthority/q-templates-application) module. It will be installed and used at development time by the Template Applicaton module.

> Full instructions on the required directory structure and configuration is found in the `Docker-compose-setup-for-CW,-DCS,-Postgres` Utilities Wiki article <sup>(_private repo_)</sup>.

## Contributors
Thanks to the following people who have contributed to this project:
* [@armoj](https://github.com/armoj)
* [@neil-stephen-mcgonigle](https://github.com/neil-stephen-mcgonigle)
* [@BarryPiccinni](https://github.com/BarryPiccinni)
* [@sinclairs](https://github.com/sinclairs)
* [@stephenjmcneill1971](https://github.com/stephenjmcneill1971)
* [@tjbburton](https://github.com/tjbburton)


## License
This project uses the following license: MIT.
