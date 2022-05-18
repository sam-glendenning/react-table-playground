import { useQuery, UseQueryResult } from 'react-query';
import { Person } from '../app.types';
import axios, { AxiosError } from 'axios';

const peopleUrl = 'https://swapi.dev/api/people';

export const fetchPeople = (pageNum = '1'): Promise<Person[]> => {
  const params = new URLSearchParams();
  params.append('page', pageNum);
  return axios.get(peopleUrl, { params }).then((response) => {
    return response.data;
  });
};

export const usePeoplePaginated = (): UseQueryResult<Person[], AxiosError> => {
  const query = new URLSearchParams();
  const pageNum = query.get('page');
  return useQuery<Person[], AxiosError, Person[]>(
    'people',
    () => {
      return fetchPeople(pageNum ?? '1');
    },
    {
      onError: (error) => {
        console.log('Got error ' + error.message);
      },
    }
  );
};
