# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "panthera-jekyll"
  spec.version       = "0.1.0"
  spec.authors       = ["Christian Ezeani"]
  spec.email         = ["christian.ezeani@gmail.com"]

  spec.summary       = "This template is a quick and simple developer portfolio theme for GitHub Pages."
  spec.homepage      = "https://github.com/christianezeani/panthera-jekyll"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.8"

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end
