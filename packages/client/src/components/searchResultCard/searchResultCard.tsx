import { FC } from "react";
import { IHotel } from "types/src/hotels";
import { ICountry } from "types/src/countries";
import { ICity } from "types/src/cities";

interface ISearchResultDropdownProps {
  hotels: IHotel[];
  cities: ICity[];
  countries: ICountry[];
}

const SearchResultDropdown: FC<ISearchResultDropdownProps> = ({
  hotels,
  cities,
  countries,
}) => {
  const Hotels = hotels.length ? (
    hotels.map((hotel, index) => (
      <li key={index}>
        <a href={`/hotels/${hotel._id}`} className="dropdown-item">
          <i className="fa fa-building mr-2"></i>
          {hotel.hotel_name}
        </a>
        <hr className="divider" />
      </li>
    ))
  ) : (
    <p>No hotels matched</p>
  );

  const Cities = cities.length ? (
    cities.map((city, index) => (
      <li key={index}>
        <a href={`/hotels/${city._id}`} className="dropdown-item">
          <i className="fa fa-building mr-2"></i>
          {city.name}
        </a>
        <hr className="divider" />
      </li>
    ))
  ) : (
    <p>No cities matched</p>
  );

  const Countries = countries.length ? (
    countries.map((country, index) => (
      <li key={index}>
        <a href={`/hotels/${country._id}`} className="dropdown-item">
          <i className="fa fa-building mr-2"></i>
          {country.country}
        </a>
        <hr className="divider" />
      </li>
    ))
  ) : (
    <p>No countries matched</p>
  );

  return (
    <div className="search-dropdown-menu dropdown-menu w-100 show p-2">
      <h2>Search Results</h2>
      <div>
        <h3>Hotels</h3>
        <ul>{Hotels}</ul>
      </div>
      <div>
        <h3>Cities</h3>
        <ul>{Cities}</ul>
      </div>
      <div>
        <h3>Countries</h3>
        <ul>{Countries}</ul>
      </div>
    </div>
  );
};

export default SearchResultDropdown;
