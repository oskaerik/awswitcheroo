# awswitcheroo

A silly Chrome extension that allows you to log into multiple AWS accounts without jumping through hoops.

Generates a [console URL](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-custom-url.html#STSConsoleLink_manual) in the `Command line or programmatic access` modal.

## Installation

1. Clone this repo
1. Open `chrome://extensions`
1. Enable `Developer mode` (top right corner)
1. Click `Load unpacked` and select the cloned repo

## Usage

This extension plays well with e.g. [MultiLogin](https://chrome.google.com/webstore/detail/multilogin/ijfgglilaeakmoilplpcjcgjaoleopfi):

1. Go to your account selection page, usually something like `https://abc123.awsapps.com/start`
1. Click `Command line or programmatic access` for the account you want to log into
1. Right-click the `awswitcheroo` link at the top of the modal and select `Open Link in New Identity`
