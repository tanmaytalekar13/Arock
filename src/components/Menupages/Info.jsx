import React from 'react';

const Info = () => {
  const section1 = [
    { title: 'follow', subtitle: '(arock)' },
    { title: 'listen', subtitle: '(arock)' },
    { title: ' Get in touch', subtitle: null,className:'timtim' },
    {
      title: 'San Diego',
      subtitle: ['bpm music', '1600 national ave', 'san diego, ca 92123']
    }
  ];

  const section2 = [
    { title: 'Instagram', subtitle: 'youtube' },
    { title: 'Spotify', subtitle: '(arock)' },
    { title: 'Email >', subtitle: null, className: 'bg-zinc-100 w-fit text-zinc-700 px-1' },
    {
      title: 'los angeles',
      subtitle: ['6255 sunset blvd.', 'suite #700', 'los angeles, ca 90028']
    }
  ];

  const renderSection = (section) =>
    section.map((item, index) => (
      <div key={index} className={item.className || ''}>
        <h4>{item.title}</h4>
        {Array.isArray(item.subtitle)&& (
          item.subtitle.map((sub, i) => <h4 key={i}>{sub}</h4>)
        )}
      </div>
    ));
  return (
    <div className='uppercase font-[a4] text-[0.65vw] flex mt-64 gap-10 opacity-90 leading-none font-thin'>
      <div className='flex flex-col gap-10'>{renderSection(section1)}</div>
      <div className='flex flex-col gap-10'>{renderSection(section2)}</div>
    </div>
  );
};

export default Info;
