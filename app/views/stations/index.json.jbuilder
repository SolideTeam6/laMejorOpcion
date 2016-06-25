json.array!(@stations) do |station|
  json.extract! station, :id, :name, :address, :lat, :long, :logo, :active
  json.url station_url(station, format: :json)
end
