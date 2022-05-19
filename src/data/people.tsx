import { useQuery, UseQueryResult } from 'react-query';
import { PeopleResponse, Person } from '../app.types';
import axios, { AxiosError } from 'axios';

const peopleUrl = 'https://swapi.dev/api/people';

export const fetchPeople = (page = 1): Promise<PeopleResponse> => {
  const params = new URLSearchParams();
  params.append('page', page.toString());
  return axios.get(peopleUrl, { params }).then((response) => {
    return response.data;
  });
};

export const usePeoplePaginated = (
  page = 1
): UseQueryResult<Person[], AxiosError> => {
  return useQuery<Person[], AxiosError, Person[], [string, { page: number }]>(
    ['people', { page }],
    (params) => {
      const { page } = params.queryKey[1];
      return fetchPeople(page ?? 1).then((data) => {
        return data.results;
      });
    },
    {
      onError: (error) => {
        console.log('Got error ' + error.message);
      },
    }
  );
};

export const usePeopleCount = (): UseQueryResult<number, AxiosError> => {
  return useQuery<number, AxiosError, number, [string]>(
    ['count'],
    () => {
      return fetchPeople().then((data) => {
        return parseInt(data.count);
      });
    },
    {
      onError: (error) => {
        console.log('Got error ' + error.message);
      },
    }
  );
};
