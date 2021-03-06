class MasterTrack < ApplicationRecord
  # Connects master track to song and owner of song
  belongs_to :song
  has_one :song_owner, through: :song, source: :user

  # Connects master track to feature tracks
  has_many :master_features, dependent: :destroy
  has_many :feature_tracks, through: :master_features

  # Connects master track to users who submitted feature tracks and the talents involved
  has_many :contributors, through: :feature_tracks, source: :user
  has_many :talents, through: :feature_tracks

  # Connects master track to comments
  has_many :comments, dependent: :destroy

  # Connects master track to people who liked it
  has_many :likes, dependent: :destroy
  has_many :fans, through: :likes, source: :user
end
