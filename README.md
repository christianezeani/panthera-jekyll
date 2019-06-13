# panthera-jekyll

[![Gem Version](https://badge.fury.io/rb/panthera-jekyll.svg)](https://badge.fury.io/rb/panthera-jekyll)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v1.4%20adopted-ff69b4.svg)](code-of-conduct.md)

*panthera-jekyll is a Jekyll theme for GitHub Pages and Jekyll sites. You can [preview the theme to see what it looks like](https://demothemes.github.io/panthera-jekyll), or even [use it today](#usage).*

<div style="text-align: center;">
  <img src="/screenshot.png" alt="panthera-jekyll" style="width: 100%; max-width: 750px;" />
</div>

## Installation

### Building a Jekyll Site

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "panthera-jekyll"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: panthera-jekyll
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install panthera-jekyll

### Building a Github Page

Add this line to your Github Page's `_config.yml`:

```yaml
remote_theme: christianezeani/panthera-jekyll
```

## Customizing

### Configuration variables

panthera-jekyll will respect the following variables, if set in your site's `_config.yml`:

```yml
title: [The title of your site or Profile Name]
subtitle: [A brief subtitle or job title]
description: [A short description of your site's purpose]
```

To configure side menu, set the following variables:

```yml
menu:
  - text: [Menu text]
    link: [Relative page link with the '/' prefix]
    icon: [Menu Icon]
```

#### Example

```yml
menu:
  - text: Portfolio
    link: /
    icon: ""

  - text: Skills & Offers
    link: /skills-and-offers
    icon: ""
```

To configure social links, set the following variables:

```yml
social_icons:
  - name: [Socialmedia title]
    link: [Social link]
    icon: [Icon class]
```

#### Example

```yml
social_icons:
  - name: linkedin
    link: https://www.linkedin.com/christianezeani
    icon: fab fa-linkedin

  - name: github
    link: https://github.com/christianezeani
    icon: fab fa-github-square
```

panthera-jekyll currently supports the following icons:

* [FontAwesome](https://fontawesome.com) (version 5.9.0)

Additionally, you may choose to set the following optional variables:

```yml
google_analytics: [Your Google Analytics tracking ID]
```

### Stylesheet

If you'd like to add your own custom styles:

1. Create a file called `/assets/css/style.scss` in your site

2. Add the following content to the top of the file, exactly as shown:

    ```scss
    ---
    ---

    @import "panthera-jekyll";
    ```

3. Add any custom CSS (or Sass, including imports) you'd like immediately after the `@import` line

*Note: If you'd like to change the theme's Sass variables, you must set new values before the `@import` line in your stylesheet.*

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/chrisitanezeani/panthera-jekyll. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

