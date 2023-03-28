import React from 'react'
import Content from './content.json'
import Styles from './styles.module.scss'

import Title from '@/components/atoms/Title'
import Paragraph from '@/components/atoms/Paragraph'
import Image from 'next/image'

import Isologo from '@/assets/img/simbolo-padrao-cropped.png'
import Mail from '@/assets/img/mail.svg'
import ShieldCheckmark from '@/assets/img/shield-checkmark.svg'
import Wallet from '@/assets/img/wallet.svg'

import Metamask from '@/assets/img/metamask.svg'
import Icons from '@/assets/img/icons.svg'

const ServiceComparison = () => {
  return (
    <section className={Styles.serviceComparison}>
      <div className="container">
        <div className={Styles.serviceComparison__content}>
          <Title
            id='serviceComparison-title'
            className={Styles.serviceComparison__title}
            text={Content.title}
            size={48}
            width={100}
            height={1}
          />
          <Paragraph
            id='serviceComparison-desc'
            className={Styles.serviceComparison__desc}
            text={Content.description}
            size={16}
            width={60}
            height={1}
          />
        </div>
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-lg-4 mb-3 mb-lg-0">
            <div className={Styles.walletCard}>
              <div className={Styles.walletCard__content}>
                <div className={Styles.gregFlux}>
                  <div className={Styles.gregFlux__header}>
                    <Image
                      src={Isologo}
                      width={50}
                      height={undefined}
                      alt="Picture"
                      className={Styles.walletCard__image}
                    />
                  </div>
                  <div className={Styles.gregFlux__body}>
                    <div className={Styles.fluxList}>
                      <div className={Styles.fluxList__item}>
                        <div className={Styles.iconHolder}>
                          <Image
                            src={Mail}
                            width={40}
                            height={undefined}
                            alt="Icon"
                          />
                        </div>
                        <Paragraph
                          className="m-0 ps-3"
                          text={Content.short_one}
                          size={16}
                          width={60}
                          height={1}
                        />
                      </div>
                      <div className={Styles.fluxList__item}>
                        <div className={Styles.iconHolder}>
                          <Image
                            src={ShieldCheckmark}
                            width={40}
                            height={undefined}
                            alt="Icon"
                          />
                        </div>
                        <Paragraph
                          className="m-0 ps-3"
                          text={Content.short_two}
                          size={16}
                          width={60}
                          height={1}
                        />
                      </div>
                      <div className={Styles.fluxList__item}>
                        <div className={Styles.iconHolder}>
                          <Image
                            src={Wallet}
                            width={40}
                            height={undefined}
                            alt="Icon"
                          />
                        </div>
                        <Paragraph
                          className="m-0 ps-3"
                          text={Content.short_thr}
                          size={16}
                          width={60}
                          height={1}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={Styles.gregFlux__footer}>
                    <Paragraph
                      className="text-center my-4"
                      color='#FFFFFF'
                      text="Instantâneo"
                      size={16}
                      width={60}
                      height={1}
                    />
                  </div>
                </div>
              </div>
              <div className={Styles.walletCard__separator} />
            </div>
          </div>
          <div className="col-lg-4">
            <div className={Styles.walletCard}>
              <div className={Styles.walletCard__content}>
                <div className={Styles.gregFlux}>
                  <div className={Styles.gregFlux__header}>
                    <Image
                      src={Metamask}
                      width={80}
                      height={undefined}
                      alt="Picture"
                      className={`${Styles.walletCard__image} ${Styles.gray}`}
                    />
                  </div>
                  <div className={Styles.gregFlux__body}>
                    <div className={Styles.fluxList}>
                      <Image
                        src={Icons}
                        width={320}
                        height={undefined}
                        alt="Picture"
                        className={`${Styles.walletCard__image} ${Styles.gray}`}
                      />
                    </div>
                  </div>
                  <div className={Styles.gregFlux__footer}>
                    <Paragraph
                      className="text-center my-4"
                      text="Ao menos 5 minutos"
                      size={16}
                      width={60}
                      height={1}
                    />
                  </div>
                </div>
              </div>
              <div className={`${Styles.walletCard__separator} ${Styles.gray}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceComparison