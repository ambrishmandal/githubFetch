import React from 'react';
import useGithub from './useGithub';

function DisplayPage(props) {
  const {name, login, company, avatar_url,followers,following,public_repos } = useGithub(props.username) || {};
  

  return (
    <div  className='text-black'>
      <h1 className='font-bold text-black text-4xl mb-10'>Fetching {props.username} from GitHub</h1>
      <div className='flex border-4 p-5 border-gray-500
       outline-none shadow-2xl'>
      {avatar_url && <img src={avatar_url} alt={`${login}'s avatar`}
       className='w-1/4' />}
      <div className='flex flex-col justify-start gap-3 font-bold text-lg'>
      <h2 className='self-start ml-10'>Name: {name || 'Loading...'}</h2>
      <h2 className='self-start ml-10'>Login: {login || 'Loading...'}</h2>
      <h2 className='self-start ml-10'>Company: {company || <span className='text-red-700'>N/A</span>}</h2>
      <h2 className='self-start ml-10'>Followers: {followers || 'Loading...'}</h2>
      <h2 className='self-start ml-10'>Following: {following}</h2>
      <h2 className='self-start ml-10'>Public Repos: {public_repos || 'Loading...'}</h2>
      </div>
      
      </div>
    </div>
  );
}

export default DisplayPage;
