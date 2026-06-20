export const pageHtml = String.raw`
<header class="site-header">
      <div class="hero-inner">
        <p class="kicker">2026 FIFA WORLD CUP</p>
        <h1>노스포 하이라이트</h1>
        <p class="hero-copy">점수도 결과도 보지 않고, 공식 하이라이트 링크로 바로 이동하세요.</p>
      </div>
    </header>

    <main>
      <nav class="view-tabs" aria-label="보기 방식">
        <button class="view-tab is-active" type="button" data-view="date">날짜별</button>
        <button class="view-tab" type="button" data-view="group">조별리그</button>
        <button class="view-tab" type="button" data-view="tournament">토너먼트</button>
      </nav>

      <section class="date-strip" aria-label="날짜 선택">
      <button class="date-arrow" type="button" data-date-move="-1" aria-label="이전 날짜"></button>
      <div id="dateScroller" class="date-scroller"></div>
      <button class="date-arrow" type="button" data-date-move="1" aria-label="다음 날짜"></button>
      </section>

      <section id="groups" class="group-overview" aria-label="조별 팀 목록">
        <article class="group-card" id="group-a-teams">
          <h2>A조</h2>
          <ul>
            <li>남아프리카 공화국</li>
            <li>대한민국</li>
            <li>멕시코</li>
            <li>체코</li>
          </ul>
        </article>
        <article class="group-card" id="group-b-teams">
          <h2>B조</h2>
          <ul>
            <li>보스니아 헤르체고비나</li>
            <li>스위스</li>
            <li>카타르</li>
            <li>캐나다</li>
          </ul>
        </article>
        <article class="group-card" id="group-c-teams">
          <h2>C조</h2>
          <ul>
            <li>모로코</li>
            <li>브라질</li>
            <li>스코틀랜드</li>
            <li>아이티</li>
          </ul>
        </article>
        <article class="group-card" id="group-d-teams">
          <h2>D조</h2>
          <ul>
            <li>미국</li>
            <li>튀르키예</li>
            <li>파라과이</li>
            <li>호주</li>
          </ul>
        </article>
        <article class="group-card" id="group-e-teams">
          <h2>E조</h2>
          <ul>
            <li>독일</li>
            <li>에콰도르</li>
            <li>코트디부아르</li>
            <li>퀴라소</li>
          </ul>
        </article>
        <article class="group-card" id="group-f-teams">
          <h2>F조</h2>
          <ul>
            <li>네덜란드</li>
            <li>스웨덴</li>
            <li>일본</li>
            <li>튀니지</li>
          </ul>
        </article>
        <article class="group-card" id="group-g-teams">
          <h2>G조</h2>
          <ul>
            <li>뉴질랜드</li>
            <li>벨기에</li>
            <li>이란</li>
            <li>이집트</li>
          </ul>
        </article>
        <article class="group-card" id="group-h-teams">
          <h2>H조</h2>
          <ul>
            <li>사우디아라비아</li>
            <li>스페인</li>
            <li>우루과이</li>
            <li>카보베르데</li>
          </ul>
        </article>
        <article class="group-card" id="group-i-teams">
          <h2>I조</h2>
          <ul>
            <li>노르웨이</li>
            <li>세네갈</li>
            <li>이라크</li>
            <li>프랑스</li>
          </ul>
        </article>
        <article class="group-card" id="group-j-teams">
          <h2>J조</h2>
          <ul>
            <li>아르헨티나</li>
            <li>알제리</li>
            <li>오스트리아</li>
            <li>요르단</li>
          </ul>
        </article>
        <article class="group-card" id="group-k-teams">
          <h2>K조</h2>
          <ul>
            <li>우즈베키스탄</li>
            <li>콜롬비아</li>
            <li>콩고민주공화국</li>
            <li>포르투갈</li>
          </ul>
        </article>
        <article class="group-card" id="group-l-teams">
          <h2>L조</h2>
          <ul>
            <li>가나</li>
            <li>잉글랜드</li>
            <li>크로아티아</li>
            <li>파나마</li>
          </ul>
        </article>
      </section>

      <nav class="group-tabs" aria-label="조 선택">
        <button class="is-active" type="button" data-group="all">전체</button>
        <button type="button" data-group="group-a">A조</button>
        <button type="button" data-group="group-b">B조</button>
        <button type="button" data-group="group-c">C조</button>
        <button type="button" data-group="group-d">D조</button>
        <button type="button" data-group="group-e">E조</button>
        <button type="button" data-group="group-f">F조</button>
        <button type="button" data-group="group-g">G조</button>
        <button type="button" data-group="group-h">H조</button>
        <button type="button" data-group="group-i">I조</button>
        <button type="button" data-group="group-j">J조</button>
        <button type="button" data-group="group-k">K조</button>
        <button type="button" data-group="group-l">L조</button>
      </nav>

      <section id="schedule" class="schedule" aria-label="조별 경기 일정">
        <article class="day-section group-section" id="group-a">
          <h2>A조</h2>
          <div class="match-row" data-game-id="vOF6lBRsXz1F5oA" data-date="2026-06-12">
            <div class="match-date">6월 12일 (금)</div>
            <div class="match-time">04:00</div>
            <div class="match-name">
              <span>멕시코</span>
              <span aria-hidden="true">vs</span>
              <span>남아프리카 공화국</span>
            </div>
            <div class="match-links" aria-label="멕시코 대 남아프리카 공화국 하이라이트 링크">
              <a href="https://m.sports.naver.com/video/1476579" target="_blank" rel="noopener noreferrer">KBS2 일반</a>
              <a href="https://m.sports.naver.com/video/1476587" target="_blank" rel="noopener noreferrer">KBS2 숏</a>
              <a href="https://chzzk.naver.com/video/13663676" target="_blank" rel="noopener noreferrer">JTBC 일반</a>
              <a href="https://chzzk.naver.com/video/13663718" target="_blank" rel="noopener noreferrer">JTBC 숏</a>
            </div>
          </div>
          <div class="match-row" data-game-id="uXjHKp1mIi7YXYT" data-date="2026-06-12">
            <div class="match-date">6월 12일 (금)</div>
            <div class="match-time">11:00</div>
            <div class="match-name">
              <span>대한민국</span>
              <span aria-hidden="true">vs</span>
              <span>체코</span>
            </div>
            <div class="match-links" aria-label="대한민국 대 체코 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="fP94EzqwwoBTTgx" data-date="2026-06-19">
            <div class="match-date">6월 19일 (금)</div>
            <div class="match-time">01:00</div>
            <div class="match-name">
              <span>체코</span>
              <span aria-hidden="true">vs</span>
              <span>남아프리카 공화국</span>
            </div>
            <div class="match-links" aria-label="체코 대 남아프리카 공화국 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="l48mfcapdDIm7Wv" data-date="2026-06-19">
            <div class="match-date">6월 19일 (금)</div>
            <div class="match-time">10:00</div>
            <div class="match-name">
              <span>멕시코</span>
              <span aria-hidden="true">vs</span>
              <span>대한민국</span>
            </div>
            <div class="match-links" aria-label="멕시코 대 대한민국 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="LdzflN63k3JBC5O" data-date="2026-06-25">
            <div class="match-date">6월 25일 (목)</div>
            <div class="match-time">10:00</div>
            <div class="match-name">
              <span>남아프리카 공화국</span>
              <span aria-hidden="true">vs</span>
              <span>대한민국</span>
            </div>
            <div class="match-links" aria-label="남아프리카 공화국 대 대한민국 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="PY2ELA7JVDNhbp1" data-date="2026-06-25">
            <div class="match-date">6월 25일 (목)</div>
            <div class="match-time">10:00</div>
            <div class="match-name">
              <span>체코</span>
              <span aria-hidden="true">vs</span>
              <span>멕시코</span>
            </div>
            <div class="match-links" aria-label="체코 대 멕시코 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
        </article>
        <article class="day-section group-section" id="group-b">
          <h2>B조</h2>
          <div class="match-row" data-game-id="KIVirGXodQcoceb" data-date="2026-06-13">
            <div class="match-date">6월 13일 (토)</div>
            <div class="match-time">04:00</div>
            <div class="match-name">
              <span>캐나다</span>
              <span aria-hidden="true">vs</span>
              <span>보스니아 헤르체고비나</span>
            </div>
            <div class="match-links" aria-label="캐나다 대 보스니아 헤르체고비나 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="FJRqtfmBoTdBXNg" data-date="2026-06-14">
            <div class="match-date">6월 14일 (일)</div>
            <div class="match-time">04:00</div>
            <div class="match-name">
              <span>카타르</span>
              <span aria-hidden="true">vs</span>
              <span>스위스</span>
            </div>
            <div class="match-links" aria-label="카타르 대 스위스 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="5jQr4NijL9QmJXK" data-date="2026-06-19">
            <div class="match-date">6월 19일 (금)</div>
            <div class="match-time">04:00</div>
            <div class="match-name">
              <span>스위스</span>
              <span aria-hidden="true">vs</span>
              <span>보스니아 헤르체고비나</span>
            </div>
            <div class="match-links" aria-label="스위스 대 보스니아 헤르체고비나 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="iNgpxWlJ8iw9wfs" data-date="2026-06-19">
            <div class="match-date">6월 19일 (금)</div>
            <div class="match-time">07:00</div>
            <div class="match-name">
              <span>캐나다</span>
              <span aria-hidden="true">vs</span>
              <span>카타르</span>
            </div>
            <div class="match-links" aria-label="캐나다 대 카타르 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="lFcMDwMFQ2EHxCh" data-date="2026-06-25">
            <div class="match-date">6월 25일 (목)</div>
            <div class="match-time">04:00</div>
            <div class="match-name">
              <span>보스니아 헤르체고비나</span>
              <span aria-hidden="true">vs</span>
              <span>카타르</span>
            </div>
            <div class="match-links" aria-label="보스니아 헤르체고비나 대 카타르 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="1IQGZ6ibYXH011u" data-date="2026-06-25">
            <div class="match-date">6월 25일 (목)</div>
            <div class="match-time">04:00</div>
            <div class="match-name">
              <span>스위스</span>
              <span aria-hidden="true">vs</span>
              <span>캐나다</span>
            </div>
            <div class="match-links" aria-label="스위스 대 캐나다 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
        </article>
        <article class="day-section group-section" id="group-c">
          <h2>C조</h2>
          <div class="match-row" data-game-id="WJvkiieR0dyXSS6" data-date="2026-06-14">
            <div class="match-date">6월 14일 (일)</div>
            <div class="match-time">07:00</div>
            <div class="match-name">
              <span>브라질</span>
              <span aria-hidden="true">vs</span>
              <span>모로코</span>
            </div>
            <div class="match-links" aria-label="브라질 대 모로코 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="pIp2kdwzMZgXLL1" data-date="2026-06-14">
            <div class="match-date">6월 14일 (일)</div>
            <div class="match-time">10:00</div>
            <div class="match-name">
              <span>아이티</span>
              <span aria-hidden="true">vs</span>
              <span>스코틀랜드</span>
            </div>
            <div class="match-links" aria-label="아이티 대 스코틀랜드 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="Dyi3OzF4bEkPuMV" data-date="2026-06-20">
            <div class="match-date">6월 20일 (토)</div>
            <div class="match-time">07:00</div>
            <div class="match-name">
              <span>스코틀랜드</span>
              <span aria-hidden="true">vs</span>
              <span>모로코</span>
            </div>
            <div class="match-links" aria-label="스코틀랜드 대 모로코 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="ou4io4NCCPSN4Jx" data-date="2026-06-20">
            <div class="match-date">6월 20일 (토)</div>
            <div class="match-time">09:30</div>
            <div class="match-name">
              <span>브라질</span>
              <span aria-hidden="true">vs</span>
              <span>아이티</span>
            </div>
            <div class="match-links" aria-label="브라질 대 아이티 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="Do4DqPmZ8F3QkkX" data-date="2026-06-25">
            <div class="match-date">6월 25일 (목)</div>
            <div class="match-time">07:00</div>
            <div class="match-name">
              <span>모로코</span>
              <span aria-hidden="true">vs</span>
              <span>아이티</span>
            </div>
            <div class="match-links" aria-label="모로코 대 아이티 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="6rItofozOjBuYzu" data-date="2026-06-25">
            <div class="match-date">6월 25일 (목)</div>
            <div class="match-time">07:00</div>
            <div class="match-name">
              <span>스코틀랜드</span>
              <span aria-hidden="true">vs</span>
              <span>브라질</span>
            </div>
            <div class="match-links" aria-label="스코틀랜드 대 브라질 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
        </article>
        <article class="day-section group-section" id="group-d">
          <h2>D조</h2>
          <div class="match-row" data-game-id="TJtN0fa0NfhltQ5" data-date="2026-06-13">
            <div class="match-date">6월 13일 (토)</div>
            <div class="match-time">10:00</div>
            <div class="match-name">
              <span>미국</span>
              <span aria-hidden="true">vs</span>
              <span>파라과이</span>
            </div>
            <div class="match-links" aria-label="미국 대 파라과이 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="VoHp2XmHFXpgZCt" data-date="2026-06-14">
            <div class="match-date">6월 14일 (일)</div>
            <div class="match-time">13:00</div>
            <div class="match-name">
              <span>호주</span>
              <span aria-hidden="true">vs</span>
              <span>튀르키예</span>
            </div>
            <div class="match-links" aria-label="호주 대 튀르키예 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="otm3ifUAdXj3aXP" data-date="2026-06-20">
            <div class="match-date">6월 20일 (토)</div>
            <div class="match-time">04:00</div>
            <div class="match-name">
              <span>미국</span>
              <span aria-hidden="true">vs</span>
              <span>호주</span>
            </div>
            <div class="match-links" aria-label="미국 대 호주 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="5q4yP11gesyrHQr" data-date="2026-06-20">
            <div class="match-date">6월 20일 (토)</div>
            <div class="match-time">12:00</div>
            <div class="match-name">
              <span>튀르키예</span>
              <span aria-hidden="true">vs</span>
              <span>파라과이</span>
            </div>
            <div class="match-links" aria-label="튀르키예 대 파라과이 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="32qeJzIx1PrsO2O" data-date="2026-06-26">
            <div class="match-date">6월 26일 (금)</div>
            <div class="match-time">11:00</div>
            <div class="match-name">
              <span>파라과이</span>
              <span aria-hidden="true">vs</span>
              <span>호주</span>
            </div>
            <div class="match-links" aria-label="파라과이 대 호주 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="WBy7c3p3yn9LxCc" data-date="2026-06-26">
            <div class="match-date">6월 26일 (금)</div>
            <div class="match-time">11:00</div>
            <div class="match-name">
              <span>튀르키예</span>
              <span aria-hidden="true">vs</span>
              <span>미국</span>
            </div>
            <div class="match-links" aria-label="튀르키예 대 미국 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
        </article>
        <article class="day-section group-section" id="group-e">
          <h2>E조</h2>
          <div class="match-row" data-game-id="Ifh0hBPenOr1rjY" data-date="2026-06-15">
            <div class="match-date">6월 15일 (월)</div>
            <div class="match-time">02:00</div>
            <div class="match-name">
              <span>독일</span>
              <span aria-hidden="true">vs</span>
              <span>퀴라소</span>
            </div>
            <div class="match-links" aria-label="독일 대 퀴라소 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="OsnjyKUbPniDfDS" data-date="2026-06-15">
            <div class="match-date">6월 15일 (월)</div>
            <div class="match-time">08:00</div>
            <div class="match-name">
              <span>코트디부아르</span>
              <span aria-hidden="true">vs</span>
              <span>에콰도르</span>
            </div>
            <div class="match-links" aria-label="코트디부아르 대 에콰도르 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="W8lLkE0hMingEkM" data-date="2026-06-21">
            <div class="match-date">6월 21일 (일)</div>
            <div class="match-time">05:00</div>
            <div class="match-name">
              <span>독일</span>
              <span aria-hidden="true">vs</span>
              <span>코트디부아르</span>
            </div>
            <div class="match-links" aria-label="독일 대 코트디부아르 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="zVkD5dfQ6RT4brI" data-date="2026-06-21">
            <div class="match-date">6월 21일 (일)</div>
            <div class="match-time">09:00</div>
            <div class="match-name">
              <span>에콰도르</span>
              <span aria-hidden="true">vs</span>
              <span>퀴라소</span>
            </div>
            <div class="match-links" aria-label="에콰도르 대 퀴라소 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="14JVl8Mc5ZGfxjk" data-date="2026-06-26">
            <div class="match-date">6월 26일 (금)</div>
            <div class="match-time">05:00</div>
            <div class="match-name">
              <span>퀴라소</span>
              <span aria-hidden="true">vs</span>
              <span>코트디부아르</span>
            </div>
            <div class="match-links" aria-label="퀴라소 대 코트디부아르 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="WUfX0iob0fLF93g" data-date="2026-06-26">
            <div class="match-date">6월 26일 (금)</div>
            <div class="match-time">05:00</div>
            <div class="match-name">
              <span>에콰도르</span>
              <span aria-hidden="true">vs</span>
              <span>독일</span>
            </div>
            <div class="match-links" aria-label="에콰도르 대 독일 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
        </article>
        <article class="day-section group-section" id="group-f">
          <h2>F조</h2>
          <div class="match-row" data-game-id="QkMQhJ6yLHhg0bx" data-date="2026-06-15">
            <div class="match-date">6월 15일 (월)</div>
            <div class="match-time">05:00</div>
            <div class="match-name">
              <span>네덜란드</span>
              <span aria-hidden="true">vs</span>
              <span>일본</span>
            </div>
            <div class="match-links" aria-label="네덜란드 대 일본 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="dtl3BItiCgnSfPs" data-date="2026-06-15">
            <div class="match-date">6월 15일 (월)</div>
            <div class="match-time">11:00</div>
            <div class="match-name">
              <span>스웨덴</span>
              <span aria-hidden="true">vs</span>
              <span>튀니지</span>
            </div>
            <div class="match-links" aria-label="스웨덴 대 튀니지 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="QKdN2ITC52hh1jF" data-date="2026-06-21">
            <div class="match-date">6월 21일 (일)</div>
            <div class="match-time">02:00</div>
            <div class="match-name">
              <span>네덜란드</span>
              <span aria-hidden="true">vs</span>
              <span>스웨덴</span>
            </div>
            <div class="match-links" aria-label="네덜란드 대 스웨덴 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="ehugrhy9qHByIrP" data-date="2026-06-21">
            <div class="match-date">6월 21일 (일)</div>
            <div class="match-time">13:00</div>
            <div class="match-name">
              <span>튀니지</span>
              <span aria-hidden="true">vs</span>
              <span>일본</span>
            </div>
            <div class="match-links" aria-label="튀니지 대 일본 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="hxgIp3EunI6eEXb" data-date="2026-06-26">
            <div class="match-date">6월 26일 (금)</div>
            <div class="match-time">08:00</div>
            <div class="match-name">
              <span>튀니지</span>
              <span aria-hidden="true">vs</span>
              <span>네덜란드</span>
            </div>
            <div class="match-links" aria-label="튀니지 대 네덜란드 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="M3O0WP6yHexeCgD" data-date="2026-06-26">
            <div class="match-date">6월 26일 (금)</div>
            <div class="match-time">08:00</div>
            <div class="match-name">
              <span>일본</span>
              <span aria-hidden="true">vs</span>
              <span>스웨덴</span>
            </div>
            <div class="match-links" aria-label="일본 대 스웨덴 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
        </article>
        <article class="day-section group-section" id="group-g">
          <h2>G조</h2>
          <div class="match-row" data-game-id="3WYkOMV89drpqi4" data-date="2026-06-16">
            <div class="match-date">6월 16일 (화)</div>
            <div class="match-time">04:00</div>
            <div class="match-name">
              <span>벨기에</span>
              <span aria-hidden="true">vs</span>
              <span>이집트</span>
            </div>
            <div class="match-links" aria-label="벨기에 대 이집트 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="xibNM7diOb8ENsl" data-date="2026-06-16">
            <div class="match-date">6월 16일 (화)</div>
            <div class="match-time">10:00</div>
            <div class="match-name">
              <span>이란</span>
              <span aria-hidden="true">vs</span>
              <span>뉴질랜드</span>
            </div>
            <div class="match-links" aria-label="이란 대 뉴질랜드 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="gcc6Fu3e2LqWVet" data-date="2026-06-22">
            <div class="match-date">6월 22일 (월)</div>
            <div class="match-time">04:00</div>
            <div class="match-name">
              <span>벨기에</span>
              <span aria-hidden="true">vs</span>
              <span>이란</span>
            </div>
            <div class="match-links" aria-label="벨기에 대 이란 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="66ngsptIPI18Ie0" data-date="2026-06-22">
            <div class="match-date">6월 22일 (월)</div>
            <div class="match-time">10:00</div>
            <div class="match-name">
              <span>뉴질랜드</span>
              <span aria-hidden="true">vs</span>
              <span>이집트</span>
            </div>
            <div class="match-links" aria-label="뉴질랜드 대 이집트 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="z5nw2eUi5M5y3Se" data-date="2026-06-27">
            <div class="match-date">6월 27일 (토)</div>
            <div class="match-time">12:00</div>
            <div class="match-name">
              <span>이집트</span>
              <span aria-hidden="true">vs</span>
              <span>이란</span>
            </div>
            <div class="match-links" aria-label="이집트 대 이란 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="xZpAUQfjryIdUzo" data-date="2026-06-27">
            <div class="match-date">6월 27일 (토)</div>
            <div class="match-time">12:00</div>
            <div class="match-name">
              <span>뉴질랜드</span>
              <span aria-hidden="true">vs</span>
              <span>벨기에</span>
            </div>
            <div class="match-links" aria-label="뉴질랜드 대 벨기에 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
        </article>
        <article class="day-section group-section" id="group-h">
          <h2>H조</h2>
          <div class="match-row" data-game-id="s9yioxVSFTsDuE3" data-date="2026-06-16">
            <div class="match-date">6월 16일 (화)</div>
            <div class="match-time">01:00</div>
            <div class="match-name">
              <span>스페인</span>
              <span aria-hidden="true">vs</span>
              <span>카보베르데</span>
            </div>
            <div class="match-links" aria-label="스페인 대 카보베르데 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="eKXKE9P6yI0RsMY" data-date="2026-06-16">
            <div class="match-date">6월 16일 (화)</div>
            <div class="match-time">07:00</div>
            <div class="match-name">
              <span>사우디아라비아</span>
              <span aria-hidden="true">vs</span>
              <span>우루과이</span>
            </div>
            <div class="match-links" aria-label="사우디아라비아 대 우루과이 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="LW8XGOed83I9F61" data-date="2026-06-22">
            <div class="match-date">6월 22일 (월)</div>
            <div class="match-time">01:00</div>
            <div class="match-name">
              <span>스페인</span>
              <span aria-hidden="true">vs</span>
              <span>사우디아라비아</span>
            </div>
            <div class="match-links" aria-label="스페인 대 사우디아라비아 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="g6yqVZylEBXe8jV" data-date="2026-06-22">
            <div class="match-date">6월 22일 (월)</div>
            <div class="match-time">07:00</div>
            <div class="match-name">
              <span>우루과이</span>
              <span aria-hidden="true">vs</span>
              <span>카보베르데</span>
            </div>
            <div class="match-links" aria-label="우루과이 대 카보베르데 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="wgzNpZBJZJQRrDi" data-date="2026-06-27">
            <div class="match-date">6월 27일 (토)</div>
            <div class="match-time">09:00</div>
            <div class="match-name">
              <span>카보베르데</span>
              <span aria-hidden="true">vs</span>
              <span>사우디아라비아</span>
            </div>
            <div class="match-links" aria-label="카보베르데 대 사우디아라비아 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="uTmUO71Xz7FmC0M" data-date="2026-06-27">
            <div class="match-date">6월 27일 (토)</div>
            <div class="match-time">09:00</div>
            <div class="match-name">
              <span>우루과이</span>
              <span aria-hidden="true">vs</span>
              <span>스페인</span>
            </div>
            <div class="match-links" aria-label="우루과이 대 스페인 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
        </article>
        <article class="day-section group-section" id="group-i">
          <h2>I조</h2>
          <div class="match-row" data-game-id="H81w6HIySlzx9tD" data-date="2026-06-17">
            <div class="match-date">6월 17일 (수)</div>
            <div class="match-time">04:00</div>
            <div class="match-name">
              <span>프랑스</span>
              <span aria-hidden="true">vs</span>
              <span>세네갈</span>
            </div>
            <div class="match-links" aria-label="프랑스 대 세네갈 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="SgknC8CDlaxEYog" data-date="2026-06-17">
            <div class="match-date">6월 17일 (수)</div>
            <div class="match-time">07:00</div>
            <div class="match-name">
              <span>이라크</span>
              <span aria-hidden="true">vs</span>
              <span>노르웨이</span>
            </div>
            <div class="match-links" aria-label="이라크 대 노르웨이 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="y6VpQ1Z2znEh3Hc" data-date="2026-06-23">
            <div class="match-date">6월 23일 (화)</div>
            <div class="match-time">06:00</div>
            <div class="match-name">
              <span>프랑스</span>
              <span aria-hidden="true">vs</span>
              <span>이라크</span>
            </div>
            <div class="match-links" aria-label="프랑스 대 이라크 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="1NVK4CL26vdJGXj" data-date="2026-06-23">
            <div class="match-date">6월 23일 (화)</div>
            <div class="match-time">09:00</div>
            <div class="match-name">
              <span>노르웨이</span>
              <span aria-hidden="true">vs</span>
              <span>세네갈</span>
            </div>
            <div class="match-links" aria-label="노르웨이 대 세네갈 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="YFjH0Rynu1V2pJP" data-date="2026-06-27">
            <div class="match-date">6월 27일 (토)</div>
            <div class="match-time">04:00</div>
            <div class="match-name">
              <span>노르웨이</span>
              <span aria-hidden="true">vs</span>
              <span>프랑스</span>
            </div>
            <div class="match-links" aria-label="노르웨이 대 프랑스 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="5TP26cCPLNgSwKQ" data-date="2026-06-27">
            <div class="match-date">6월 27일 (토)</div>
            <div class="match-time">04:00</div>
            <div class="match-name">
              <span>세네갈</span>
              <span aria-hidden="true">vs</span>
              <span>이라크</span>
            </div>
            <div class="match-links" aria-label="세네갈 대 이라크 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
        </article>
        <article class="day-section group-section" id="group-j">
          <h2>J조</h2>
          <div class="match-row" data-game-id="hDIOhfv2CJz8Zx0" data-date="2026-06-17">
            <div class="match-date">6월 17일 (수)</div>
            <div class="match-time">10:00</div>
            <div class="match-name">
              <span>아르헨티나</span>
              <span aria-hidden="true">vs</span>
              <span>알제리</span>
            </div>
            <div class="match-links" aria-label="아르헨티나 대 알제리 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="FMP897MOxWWWHKr" data-date="2026-06-17">
            <div class="match-date">6월 17일 (수)</div>
            <div class="match-time">13:00</div>
            <div class="match-name">
              <span>오스트리아</span>
              <span aria-hidden="true">vs</span>
              <span>요르단</span>
            </div>
            <div class="match-links" aria-label="오스트리아 대 요르단 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="ukQo5BMsXYKNC4S" data-date="2026-06-23">
            <div class="match-date">6월 23일 (화)</div>
            <div class="match-time">02:00</div>
            <div class="match-name">
              <span>아르헨티나</span>
              <span aria-hidden="true">vs</span>
              <span>오스트리아</span>
            </div>
            <div class="match-links" aria-label="아르헨티나 대 오스트리아 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="9O2Q9ja7W0fuktR" data-date="2026-06-23">
            <div class="match-date">6월 23일 (화)</div>
            <div class="match-time">12:00</div>
            <div class="match-name">
              <span>요르단</span>
              <span aria-hidden="true">vs</span>
              <span>알제리</span>
            </div>
            <div class="match-links" aria-label="요르단 대 알제리 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="hQl7Xcio5ddahqF" data-date="2026-06-28">
            <div class="match-date">6월 28일 (일)</div>
            <div class="match-time">11:00</div>
            <div class="match-name">
              <span>알제리</span>
              <span aria-hidden="true">vs</span>
              <span>오스트리아</span>
            </div>
            <div class="match-links" aria-label="알제리 대 오스트리아 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="gTGz2n3C3ct1sry" data-date="2026-06-28">
            <div class="match-date">6월 28일 (일)</div>
            <div class="match-time">11:00</div>
            <div class="match-name">
              <span>요르단</span>
              <span aria-hidden="true">vs</span>
              <span>아르헨티나</span>
            </div>
            <div class="match-links" aria-label="요르단 대 아르헨티나 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
        </article>
        <article class="day-section group-section" id="group-k">
          <h2>K조</h2>
          <div class="match-row" data-game-id="umdBVpCfddNXbRK" data-date="2026-06-18">
            <div class="match-date">6월 18일 (목)</div>
            <div class="match-time">02:00</div>
            <div class="match-name">
              <span>포르투갈</span>
              <span aria-hidden="true">vs</span>
              <span>콩고민주공화국</span>
            </div>
            <div class="match-links" aria-label="포르투갈 대 콩고민주공화국 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="BYCgQlgy6OZhsUo" data-date="2026-06-18">
            <div class="match-date">6월 18일 (목)</div>
            <div class="match-time">11:00</div>
            <div class="match-name">
              <span>우즈베키스탄</span>
              <span aria-hidden="true">vs</span>
              <span>콜롬비아</span>
            </div>
            <div class="match-links" aria-label="우즈베키스탄 대 콜롬비아 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="DMzOXwCiV8SAZ0R" data-date="2026-06-24">
            <div class="match-date">6월 24일 (수)</div>
            <div class="match-time">02:00</div>
            <div class="match-name">
              <span>포르투갈</span>
              <span aria-hidden="true">vs</span>
              <span>우즈베키스탄</span>
            </div>
            <div class="match-links" aria-label="포르투갈 대 우즈베키스탄 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="MuZAq4eOkTLSJ8h" data-date="2026-06-24">
            <div class="match-date">6월 24일 (수)</div>
            <div class="match-time">11:00</div>
            <div class="match-name">
              <span>콜롬비아</span>
              <span aria-hidden="true">vs</span>
              <span>콩고민주공화국</span>
            </div>
            <div class="match-links" aria-label="콜롬비아 대 콩고민주공화국 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="IedS6mKSS03d7Bc" data-date="2026-06-28">
            <div class="match-date">6월 28일 (일)</div>
            <div class="match-time">08:30</div>
            <div class="match-name">
              <span>콜롬비아</span>
              <span aria-hidden="true">vs</span>
              <span>포르투갈</span>
            </div>
            <div class="match-links" aria-label="콜롬비아 대 포르투갈 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="VovjMyPygIvAY9I" data-date="2026-06-28">
            <div class="match-date">6월 28일 (일)</div>
            <div class="match-time">08:30</div>
            <div class="match-name">
              <span>콩고민주공화국</span>
              <span aria-hidden="true">vs</span>
              <span>우즈베키스탄</span>
            </div>
            <div class="match-links" aria-label="콩고민주공화국 대 우즈베키스탄 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
        </article>
        <article class="day-section group-section" id="group-l">
          <h2>L조</h2>
          <div class="match-row" data-game-id="5P8tR6X0pIJzUf2" data-date="2026-06-18">
            <div class="match-date">6월 18일 (목)</div>
            <div class="match-time">05:00</div>
            <div class="match-name">
              <span>잉글랜드</span>
              <span aria-hidden="true">vs</span>
              <span>크로아티아</span>
            </div>
            <div class="match-links" aria-label="잉글랜드 대 크로아티아 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="ufkw1gIqXikWZ3N" data-date="2026-06-18">
            <div class="match-date">6월 18일 (목)</div>
            <div class="match-time">08:00</div>
            <div class="match-name">
              <span>가나</span>
              <span aria-hidden="true">vs</span>
              <span>파나마</span>
            </div>
            <div class="match-links" aria-label="가나 대 파나마 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="MZRYrEWBtp16chW" data-date="2026-06-24">
            <div class="match-date">6월 24일 (수)</div>
            <div class="match-time">05:00</div>
            <div class="match-name">
              <span>잉글랜드</span>
              <span aria-hidden="true">vs</span>
              <span>가나</span>
            </div>
            <div class="match-links" aria-label="잉글랜드 대 가나 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="HGtAqiXmuzswSmd" data-date="2026-06-24">
            <div class="match-date">6월 24일 (수)</div>
            <div class="match-time">08:00</div>
            <div class="match-name">
              <span>파나마</span>
              <span aria-hidden="true">vs</span>
              <span>크로아티아</span>
            </div>
            <div class="match-links" aria-label="파나마 대 크로아티아 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="fN1kuTPSu5OoM7H" data-date="2026-06-28">
            <div class="match-date">6월 28일 (일)</div>
            <div class="match-time">06:00</div>
            <div class="match-name">
              <span>크로아티아</span>
              <span aria-hidden="true">vs</span>
              <span>가나</span>
            </div>
            <div class="match-links" aria-label="크로아티아 대 가나 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
          <div class="match-row" data-game-id="euQapAA8XVFRbmR" data-date="2026-06-28">
            <div class="match-date">6월 28일 (일)</div>
            <div class="match-time">06:00</div>
            <div class="match-name">
              <span>파나마</span>
              <span aria-hidden="true">vs</span>
              <span>잉글랜드</span>
            </div>
            <div class="match-links" aria-label="파나마 대 잉글랜드 하이라이트 링크">
              <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
              <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
              <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
              <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
            </div>
          </div>
        </article>
      </section>

      <section id="tournament" class="tournament-view" aria-label="토너먼트 일정" hidden>
        <nav class="round-tabs" aria-label="토너먼트 라운드 선택">
          <button class="is-active" type="button" data-round="r32">32강</button>
          <button type="button" data-round="r16">16강</button>
          <button type="button" data-round="qf">8강</button>
          <button type="button" data-round="sf">준결승전</button>
          <button type="button" data-round="final">결승전</button>
        </nav>
        <div id="tournamentBracket" class="tournament-bracket"></div>
      </section>
    </main>

    <section class="ad-section" aria-label="광고">
      <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-6788425959877259"
        data-ad-slot="8873083463"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    </section>

    <footer class="site-footer">
      <p>본 서비스는 공식 하이라이트 영상을 직접 제공하지 않습니다.</p>
      <p>모든 영상은 각 권리자의 공식 페이지에서 시청할 수 있으며, 본 서비스는 해당 공식 페이지로 연결하는 링크만 제공합니다.</p>
    </footer>
`;
