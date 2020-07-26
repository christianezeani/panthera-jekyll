# panthera-jekyll

[![Gem Version](https://badge.fury.io/rb/panthera-jekyll.svg)](https://badge.fury.io/rb/panthera-jekyll)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v1.4%20adopted-ff69b4.svg)](code-of-conduct.md)
<!-- [![Jekyll Themes Shield](https://img.shields.io/badge/featured%20on-JT-red.svg)](https://jekyll-themes.com) -->

*panthera-jekyll is a Jekyll theme for GitHub Pages and Jekyll sites. You can [preview the theme to see what it looks like](https://demothemes.github.io/panthera-jekyll), or even [use it today](#installation).*

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

To configure the left side set the following variables as shown below:

```yml
left_side:
  background_image: [Absolute or relative image url]
  background_color: [CSS background color, e.g. "#F00". We strongly recommend quoting this value. Don't worry about the transparency of the background, we've taken care of that.]
  close_button_color: [CSS background color, e.g. "#F00". We strongly recommend quoting this value.]
  text_color: [CSS background color, e.g. "#F00". We strongly recommend quoting this value.]
```

#### Example

```yml
left_side:
  background_image: "./assets/images/left-background.jpg"
  background_color: "#F00"
  close_button_color: "#F00"
  text_color: "#F00"
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

To configure footer, set the following variables:

```yml
footer:
  copyright_text: [The copyright text. Value should be quoted]
```

#### Example

```yml
footer:
  copyright_text: "&copy; Christian Ezeani"
```

panthera-jekyll currently supports the following icons:

* [FontAwesome](https://fontawesome.com) (version 5.9.0)

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

## Blog Posts

### Creating Posts

To create a post, add a file to your `_posts` directory with the following format:

```
YEAR-MONTH-DAY-title.MARKUP
```

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. For example, the following are examples of valid post filenames:

```
2020-07-10-new-years-eve-is-awesome.md
```

```md
---
layout: post
title: First Demo Post
date: 2020-07-10 13:32:20 +0300
description: Post description (optional)
image: /image.jpg (optional)
tags: [Holidays, Hawaii]
---

Post content here
```

### Displaying an index of posts

1. Create a page, e.g. `posts.md`, with the following content:

```md
---
layout: post
---

# PAGE TITLE HERE

{% include posts/index.html %}
```

2. Add a link to the left pane in your `_config.yml`

```yml
menu:
  ...
  - text: Blog Posts
    link: /posts
    icon: ""
```

...and you're good

More post features are coming soon. To get updates on new features, hit the `Watch` button at the top of this page to get notifications.

If you love this project, kindly hit the `Star` button at the top of this page.

Follow me on [Github](//github.com/christianezeani) to see more of my projects.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/chrisitanezeani/panthera-jekyll. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](https://contributor-covenant.org) code of conduct.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

