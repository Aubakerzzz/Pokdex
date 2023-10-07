import React, { useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import { SortMenu } from './SortMenu';

export function SearchInput({
  defaultList,
  setDefaultList,
  filteredListResults,
  setFilteredListResults,
  searchInputTerm,
  setSearchInputTerm,
  setSort,
}) {
  const [openMenu, setOpenMenu] = useState(false);

  const FilterPokemonByTerm = (term) => {
    setSearchInputTerm(term);

    if (term !== '') {
      const filteredPokemon = defaultList.filter((pokemon) =>
        pokemon.name.split(' ').join(' ').includes(term.toLowerCase())
      );

      const filteredPokemonTypes = defaultList.filter((pokemon) => {
        return pokemon.type.join(', ').includes(term.toLowerCase());
      });

      setFilteredListResults([
        ...new Set([...filteredPokemon, ...filteredPokemonTypes]),
      ]);
    }

    if (term === '') {
      setFilteredListResults(defaultList);
    }
  };
  return (
    <div className='p-2 mt-3 '>
      <div style={{ display: 'flex', gap: '2', alignItems: 'center', color: 'blue', justifyContent: 'center', margin: 'auto', borderRadius: '50%', border: '2px solid blue' }}>
        <SearchIcon style={{ height: '1.5rem', marginLeft: '0.75rem', color: 'blue' }} />
        <input
          value={searchInputTerm}
          onChange={(e) => FilterPokemonByTerm(e.target.value.toLowerCase())}
          type='text'
          style={{ backgroundColor: 'transparent', width: '7rem', padding: '0.5rem', outline: 'none' }}
          placeholder='Search...'
        />
        <SortMenu
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          setSort={setSort}
          setDefaultList={setDefaultList}
          defaultList={defaultList}
          filteredListResults={filteredListResults}
          setFilteredListResults={setFilteredListResults}
          setSearchInputTerm={setSearchInputTerm}
        />
      </div>
    </div>
  );
}
