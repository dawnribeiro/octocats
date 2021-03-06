import React, { Component } from 'react'
import Cat from './Cat'

const Cats = [
  {
    number: '#68',
    src: 'https://octodex.github.com/images/doctocat-brown.jpg',
    name: 'Doctocat Brown',
    img: 'https://github.com/jonrohan.png'
  },
  {
    number: '#56',
    src: 'https://octodex.github.com/images/octocat-de-los-muertos.jpg',
    name: 'Octocat De Los Muertos',
    img: 'https://github.com/cameronmcefee.png'
  },

  {
    number: '#105',
    src: 'https://octodex.github.com/images/dunetocat.png',
    name: 'Dunetocat',
    img: 'https://github.com/JohnCreek.png'
  },
  {
    number: '#102',
    src: 'https://octodex.github.com/images/daftpunktocat-thomas.gif',
    name: 'Daftpunktocat',
    img: 'https://github.com/jeejkang.png'
  },
  {
    number: '#78',
    src: 'https://octodex.github.com/images/heisencat.png',
    name: 'Heisencat',
    img: 'https://github.com/jonrohan.png'
  },
  {
    number: '#143',
    src: 'https://octodex.github.com/images/boxertocat_octodex.jpg',
    name: 'Boxertocat',
    img: 'https://github.com/rubyjazzy.png'
  },
  {
    number: '#136',
    src: 'https://octodex.github.com/images/justicetocat.jpg',
    name: 'Justicetocat',
    img: 'https://github.com/heyhayhay.pn'
  },
  {
    number: '#120',
    src: 'https://octodex.github.com/images/gobbleotron.gif',
    name: 'Gobble - o - tron',
    img: 'https://github.com/JohnCreek.png'
  },
  {
    number: '#36',
    src: 'https://octodex.github.com/images/xtocat.jpg',
    name: 'Xtocat',
    img: 'https://github.com/cameronmcefee.png'
  },
  {
    number: '#114',
    src: 'https://octodex.github.com/images/saritocat.png',
    name: 'Saritocat',
    img: 'https://github.com/JohnCreek.png'
  },
  {
    number: '#109',
    src: 'https://octodex.github.com/images/yaktocat.png',
    name: 'Yaktocat',
    img: 'https://github.com/jeejkang.png'
  },
  {
    number: '#105',
    src: 'https://octodex.github.com/images/dunetocat.png',
    name: 'Dunetocat',
    img: 'https:github.com/JohnCreek.png'
  },
  {
    number: '#25',
    src: 'https://octodex.github.com/images/ironcat.jpg',
    name: 'IronCat',
    img: 'https://github.com/cameronmcefee.png'
  },
  {
    number: '#83',
    src: 'https://octodex.github.com/images/murakamicat.png',
    name: 'Murakamicat',
    img: 'https://github.com/billyroh.png'
  }
]

class Octocats extends Component {
  render() {
    return (
      <div class="container">
        <section class="main-body">
          <Cat
            number="#3"
            src="https://octodex.github.com/images/octobiwan.jpg"
            name="Octobi Wan Catnobi"
            img="https://github.com/cameronmcefee.png"
          />
          <Cat
            number="#86"
            src="https://octodex.github.com/images/stormtroopocat.png"
            name="Stormtroopocat"
            img="https://github.com/jeejkang.png"
          />
          {Cats.map(cat => {
            return (
              <Cat
                key={cat.name}
                number={cat.number}
                src={cat.src}
                name={cat.name}
                img={cat.img}
              />
            )
          })}
          {/* 
          <div class="outer-image">
            <img
              class="image-area"
              src="https://octodex.github.com/images/doctocat-brown.jpg"
            />
            <section class="caption">
              <p> #68</p>
              <div class="name-pic">
                <p>
                  {' '}
                  the <em> Doctocat Brown </em> by{' '}
                </p>{' '}
                <img src="https://github.com/jonrohan.png" />
              </div>{' '}
            </section>{' '}
          </div>{' '}
          <div class="outer-image">
            <img
              class="image-area"
              src="https://octodex.github.com/images/octocat-de-los-muertos.jpg"
            />
            <section class="caption">
              <p> #56</p>
              <div class="name-pic">
                <p>
                  {' '}
                  the <em> Octocat De Los Muertos </em> by{' '}
                </p>{' '}
                <img src="https://github.com/cameronmcefee.png" />
              </div>{' '}
            </section>{' '}
          </div>{' '}
          <div class="outer-image">
            <img
              class="image-area"
              src="https://octodex.github.com/images/dunetocat.png"
            />
            <section class="caption">
              <p> #105</p>
              <div class="name-pic">
                <p>
                  {' '}
                  the <em> Dunetocat </em> by{' '}
                </p>{' '}
                <img src="https://github.com/JohnCreek.png" />
              </div>{' '}
            </section>{' '}
          </div>{' '}
          <div class="outer-image">
            <img
              class="image-area"
              src="https://octodex.github.com/images/daftpunktocat-thomas.gif"
            />
            <section class="caption">
              <p> #102</p>
              <div class="name-pic">
                <p>
                  {' '}
                  the <em> Daftpunktocat - Thomas </em> by{' '}
                </p>{' '}
                <img src="https://github.com/jeejkang.png" />
              </div>{' '}
            </section>{' '}
          </div>{' '}
          <div class="outer-image">
            <img
              class="image-area"
              src="https://octodex.github.com/images/heisencat.png"
            />
            <section class="caption">
              <p> #78</p>
              <div class="name-pic">
                <p>
                  {' '}
                  the <em> Heisencat </em> by{' '}
                </p>{' '}
                <img src="https://github.com/jonrohan.png" />
              </div>{' '}
            </section>{' '}
          </div>{' '}
          <div class="outer-image">
            <img
              class="image-area"
              src="https://octodex.github.com/images/boxertocat_octodex.jpg"
            />
            <section class="caption">
              <p> #143</p>
              <div class="name-pic">
                <p>
                  {' '}
                  the <em> Boxertocat </em> by{' '}
                </p>{' '}
                <img src="https://github.com/rubyjazzy.png" />
              </div>{' '}
            </section>{' '}
          </div>{' '}
          <div class="outer-image">
            <img
              class="image-area"
              src="https://octodex.github.com/images/justicetocat.jpg"
            />
            <section class="caption">
              <p> #136</p>
              <div class="name-pic">
                <p>
                  {' '}
                  the <em> Justicetocat </em> by{' '}
                </p>{' '}
                <img src="https://github.com/heyhayhay.png" />
              </div>{' '}
            </section>{' '}
          </div>{' '}
          <div class="outer-image">
            <img
              class="image-area"
              src="https://octodex.github.com/images/gobbleotron.gif"
            />
            <section class="caption">
              <p> #120</p>
              <div class="name-pic">
                <p>
                  {' '}
                  the <em> Gobble - o - tron </em> by{' '}
                </p>{' '}
                <img src="https://github.com/JohnCreek.png" />
                <img src="https://github.com/tonyjaramillo.png" />
              </div>{' '}
            </section>{' '}
          </div>{' '}
          <div class="outer-image">
            <img
              class="image-area"
              src="https://octodex.github.com/images/xtocat.jpg"
            />
            <section class="caption">
              <p> #36</p>
              <div class="name-pic">
                <p> the X - tocat by </p>{' '}
                <img src="https://github.com/cameronmcefee.png" />
              </div>{' '}
            </section>{' '}
          </div>{' '}
          <div class="outer-image">
            <img
              class="image-area"
              src="https://octodex.github.com/images/saritocat.png"
            />
            <section class="caption">
              <p> #114</p>
              <div class="name-pic">
                <p> the Saritocat by </p>{' '}
                <img src="https://github.com/JohnCreek.png" />
              </div>{' '}
            </section>{' '}
          </div>{' '}
          <div class="outer-image">
            <img
              class="image-area"
              src="https://octodex.github.com/images/yaktocat.png"
            />
            <section class="caption">
              <p> #109</p>
              <div class="name-pic">
                <p> the Yaktocat by </p>{' '}
                <img src="https://github.com/jeejkang.png" />
              </div>{' '}
            </section>{' '}
          </div>{' '}
          <div class="outer-image">
            <img
              class="image-area"
              src="https://octodex.github.com/images/dunetocat.png"
            />
            <section class="caption">
              <p> #105</p>
              <div class="name-pic">
                <p> the Dunetocat by </p>{' '}
                <img src="https://github.com/JohnCreek.png" />
              </div>{' '}
            </section>{' '}
          </div>{' '}
          <div class="outer-image">
            <img
              class="image-area"
              src="https://octodex.github.com/images/ironcat.jpg"
            />
            <section class="caption">
              <p> #25</p>
              <div class="name-pic">
                <p> the IronCat by </p>{' '}
                <img src="https://github.com/cameronmcefee.png" />
              </div>{' '}
            </section>{' '}
          </div>{' '}
          <div class="outer-image">
            <img
              class="image-area"
              src="https://octodex.github.com/images/murakamicat.png"
            />
            <section class="caption">
              <p> #83</p>
              <div class="name-pic">
                <p> the Murakamicat by </p>{' '}
                <img src="https://github.com/billyroh.png" />
              </div>{' '}
            </section>{' '}
          </div>{' '} */}{' '}
        </section>
        <footer>
          <div class="bottom-links">
            <p> RSS </p> <p> FAQ </p>{' '}
          </div>{' '}
          <i class="fab fa-github"> </i>{' '}
          <div class="copyright">
            <p> ©2013– 2018 GitHub, Inc. </p> <p> All rights reserved. </p>{' '}
          </div>{' '}
        </footer>{' '}
      </div>
    )
  }
}

export default Octocats
