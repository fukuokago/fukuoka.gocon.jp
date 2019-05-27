<i18n>
en:
  desc: |-
    This time, we have prepared some registration types in following.
    We are efforting for as many people as possible to attend this conference.
    Please feel free to attend this conference if you have time for 13th July and can visit to Fukuoka!
  entry: Go to Registration page on Connpass
  scholarships: Scholarships (Lottery)
  types:
    title: Registration Types
    subject:
      - Lottery
      - First Come First Served
      - For People from Distance (First Come First Served)
      - Volunteer Staff (Lottery)
      - For People who apply proposals (Lottery)
      - For Women and Gender Minorities (First Come First Served)
    desc:
      - As is, literary, first come first served
      - The lottery happens on 1pm JST, Jun 3th
      - For those who need to stay near the venue in advance of the event day, or who need to take express/bullet train or air plane.
      - Who can help the event as staff with on the previous day (from 4pm to 8pm JST) and the day in a certain period of the time. (Of course you can join the event except for your slot.)
      - For people who has applied to our CfP. All applicants of the CfP can register to this slot whether proposal is accepted or not.
      - For women and gender minorities. Of course you can also attend in any other applicable one.
  cancel:
    title: Participation cancellation
    body: |-
      If you are unable to attend the event for good reason, please request a cancellation from Connpass as soon as possible.
      Cancellation without notice may lower the priority of participation at the next and subsequent events.
  code_of_conduct:
    name: Code of Conduct
    title: Code of Conduct
    body: |-
      All participants must comply with our {coc}.
      If you see or hear any problems, please {contact}.
  taking_pictures:
    title: Taking Pictures
    body: |-
      The situation on the day may be published as a report article on a web site etc.
      In that case, we will shoot with videos and photos as the appearance of the session and the venue.
      I think that I will not see my face mainly from behind, but please {contact} if you have problems shooting.
  notice: contact us
ja:
  desc: |-
    参加受付には、一般枠にあわせていくつかの優待枠を設けております（出来るだけ多くの人が平等にイベント参加できるように努力しています）。
    ご自分の予定表を確認し、「7/13に福岡でイベント参加できるよ！」という方は、どうぞ、お気軽にConnpassから参加申込してください！💁
  entry: Connpassの参加登録ページへ
  scholarships: スカラーシップ枠（抽選）
  scholarshipsdesc: 交通費や宿泊費などのサポート込みの学生優待枠です。
  types:
    title: 参加登録枠について
    subject:
      - 一般枠（抽選）
      - 早期申込枠（先着）
      - 遠方枠（先着）
      - ボランティアスタッフ枠（抽選）
      - CFP応募枠（抽選）
      - 女性／ジェンダーマイノリティ枠（先着）
    desc:
      - 参加登録の受付開始からの先着順です。
      - 早期に申込みをしていただいた人の優先枠です。6/3 13時に抽選を行います。
      - 前泊をしなければ参加できない、あるいは事前に予約が必要な新幹線や飛行機を使用する必要がある人の優先枠です。
      - 前日(16時〜20時)と当日に決められたシフトでスタッフ業務を手伝ってくれる人の優先枠です（シフト以外の時間はイベントにご参加ください）。
      - CFP応募した人の優先枠です。
      - 多様化を歓迎する優先枠です。もちろん、該当する他のどの枠でも参加できます。
  cancel:
    title: 参加できなくなった場合
    body: |-
      正当な理由によりイベントに参加することができなくなった場合、速やかにConnpassからキャンセル処理をお願いします。
      無断キャンセルは、次回以降のイベントにおいて参加の優先順位を下げる場合があります。
  code_of_conduct:
    name: 行動規範
    title: 行動規範について
    body: |-
      すべての参加者は、私たちの定める{coc}を遵守していただく必要があります。
      もし、問題を見たり聞いたりしたら{contact}ください。
  taking_pictures:
    title: 撮影とレポート記事について
    body: |-
      当日の様子をレポート記事として、Webサイト等に公開する可能性があります。
      その場合、セッションや会場の様子として動画や写真で撮影を行います。
      主に後ろからの撮影で顔が映ることはないと思いますが、撮影されると問題がある場合は{contact}ください。
  notice: 私たちへお知らせ
</i18n>

<template>
  <div class="registration">
    <h2>Registration</h2>
    <p>{{ $t('desc') }}</p>

    <p class="goto-form">
      <a class="button large is-inverted is-outlined" href="https://fukuokago.connpass.com/event/130797/">
        {{ $t('entry') }}
        <span class="external" place="external"><i class="fas fa-external-link-alt"></i></span>
      </a>
    </p>

    <h3>{{ $t('types.title') }} 🎫</h3>
    <ul class="colored">
      <li v-for="(text, i) in $t('types.subject')"><span class="registration-type">{{ text }}</span><br />
          {{ $t('types.desc.' + i) }}
      </li>
      <li><nuxt-link :to="localePath('scholarships')"><span class="registration-type">{{ $t('scholarships') }}</span></nuxt-link><br />
          {{ $t('scholarshipsdesc') }}
      </li>
    </ul>

    <h3>😷 {{ $t('cancel.title') }}</h3>
    <p>{{ $t('cancel.body') }}</p>

    <h3>👨‍👩‍👧 {{ $t('code_of_conduct.title') }}</h3>
    <i18n path="code_of_conduct.body" tag="p">
      <nuxt-link :to="localePath('code-of-conduct')" place="coc">{{ $t('code_of_conduct.name') }}</nuxt-link>
      <a href="https://docs.google.com/forms/d/1Dgm1E0Q69Dfp1Q6u712sAuHQyBVC6383llhEeubN8XQ" place="contact">{{ $t('notice') }}</a>
    </i18n>

    <h3>📸 {{ $t('taking_pictures.title') }}</h3>
    <i18n path="taking_pictures.body" tag="p">
      <a href="https://docs.google.com/forms/d/1Dgm1E0Q69Dfp1Q6u712sAuHQyBVC6383llhEeubN8XQ" place="contact">{{ $t('notice') }}</a>
    </i18n>

    <p class="goto-form">
      <a class="button large is-inverted is-outlined" href="https://fukuokago.connpass.com/event/130797/">
        {{ $t('entry') }}
        <span class="external" place="external"><i class="fas fa-external-link-alt"></i></span>
      </a>
    </p>
  </div>
</template>

<style scoped>
.goto-form {
  text-align: center;
}
.registration-type {
  font-weight: bold;
}
</style>
