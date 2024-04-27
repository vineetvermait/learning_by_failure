import pandas as pd
from glob import glob
BASE_PATH = '/workspace/nifty/{stock}/{year}{month}*.csv'
OHLC_COLUMNS = ['open', 'high', 'low', 'close']


def load(
        stock: str,
        year: str = '*',
        month: str = '*'
) -> pd.DataFrame:
    path = BASE_PATH.format(stock=stock, year=year, month=month)
    df = pd.concat(
        list(map(lambda x: pd.read_csv(x, parse_dates=True), glob(path))))
    df.datetime = pd.to_datetime(df.datetime)
    df.set_index('datetime', inplace=True)
    return df[OHLC_COLUMNS]
