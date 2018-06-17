# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# make jbuilder convert everything to camelcase
Jbuilder.key_format camelize: :lower
