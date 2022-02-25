import classes from './BuyAstraCoin.module.scss';
import { ReactComponent as Rocket } from '../../assets/icons/rocket.svg';

const BuyAstraCoin = () => {
	return (
		<div className={classes.buyacon}>
			<div className={classes.buyaconb}>
				<h1 className={classes.title}>WHAT IS ASTRACOIN?</h1>
				<p className={classes.tcon}>
					AstraCoin can be used to reward users on the Astra Platform
					based on any community service provided. AstraCoin can be
					purchased using etherium powered by a MetaMask wallet.
					Create a MetaMask wallet by installing the browser extension
					if you haven’t already.
				</p>
				<h2 className={classes.stitle}>Choose a Pack</h2>
				<div className={classes.pricingbox}>
					<div className={classes.pricecard}>
						<div className={classes.pricecardcon}>
							<div className={classes.recom}></div>
							<div className={classes.packtitle}>Stack</div>
							<div className={classes.curprice}>
								<p1 className={classes.astraprice}>
									300
									<Rocket width={20} height={20} />{' '}
								</p1>
								<p1 className={classes.ethprice}>
									for 0.0002 ETH
								</p1>
							</div>
							<p1 className={classes.probutton}>
								<p1 className={classes.proceed}>PROCEED</p1>
							</p1>
						</div>
					</div>
					<div className={classes.pricecard}>
						<div className={classes.pricecardcon}>
							<div className={classes.recom}>RECOMMENDED</div>
							<div className={classes.packtitle}>Box</div>
							<div className={classes.curprice}>
								<p1 className={classes.astraprice}>
									300
									<Rocket width={20} height={20} />{' '}
								</p1>
								<p1 className={classes.ethprice}>
									for 0.0002 ETH
								</p1>
							</div>
							<p1 className={classes.probutton}>
								<p1 className={classes.proceed}>PROCEED</p1>
							</p1>
						</div>
					</div>
					<div className={classes.pricecard}>
						<div className={classes.pricecardcon}>
							<div className={classes.recom}></div>
							<div className={classes.packtitle}>Vault</div>
							<div className={classes.curprice}>
								<p1 className={classes.astraprice}>
									300
									<Rocket width={20} height={20} />
								</p1>
								<p1 className={classes.ethprice}>
									for 0.0002 ETH
								</p1>
							</div>
							<p1 className={classes.probutton}>
								<p1 className={classes.proceed}>PROCEED</p1>
							</p1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BuyAstraCoin;
